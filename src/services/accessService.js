import accessRepository from '../repositories/accessRepositories.js';
import addressRepository from '../repositories/addressRepositories.js';
import specialtyRepository from '../repositories/specialtyRepositories.js';
import errors from '../errors/index.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

async function registerPatient(name, email, cpf, password) {
    const patientExists = await accessRepository.findPatient(email, cpf)
    if (patientExists.length !== 0) throw new Error("User alredy exists")
    const patient = await accessRepository.createPatient(name, email, cpf, password);
    return patient;
}

async function registerDoctor(name, email, crm, password,  city, specialty) {
    const doctorExists = await accessRepository.findDoctor(email, crm)
    const cityExists = await addressRepository.findCity(city)
    const specialtyExists = await specialtyRepository.findSpecialty(specialty)
    if (doctorExists.length !== 0) throw errors.conflictError("doctor already exists")
    if (cityExists.length === 0) throw errors.notFoundAtQueryError(city,"city")
    if (specialtyExists.length === 0) throw errors.notFoundAtQueryError(specialty, "specialties")
    const doctor = await accessRepository.createDoctor(name, email, crm, password, cityExists[0].id, specialtyExists[0].id);
    return doctor;
}


async function loginPatient(email, password) {
    const { rows: users } = await accessRepository.findPatientByEmail(email);
    if (users.length === 0) throw errors.invalidCredentialsError();
    const [user] = users;

    const passwordOk = await bcrypt.compare(password, user.password);
    if (!passwordOk) throw errors.invalidCredentialsError();

    const token = jwt.sign({ id: user.id, doctor:false }, process.env.SECRET, { expiresIn: 86400 });
    return token;
}

async function loginDoctor(email, password) {
    const { rows: users } = await accessRepository.findDoctorByEmail(email);
    if (users.length === 0) throw errors.invalidCredentialsError();
    const [user] = users;

    const passwordOk = await bcrypt.compare(password, user.password);
    if (!passwordOk) throw errors.invalidCredentialsError();

    const token = jwt.sign({ id: user.id, doctor:true }, process.env.SECRET, { expiresIn: 86400 });
    return token;
}

export default { registerPatient, registerDoctor, loginPatient, loginDoctor};

