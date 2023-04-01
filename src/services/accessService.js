import accessRepository from '../repositories/accessRepositories.js';
import errors from '../errors/index.js'
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

async function registerPatient(name, email, cpf, password) {
    const patientExists = await accessRepository.findPatient(email, cpf)
    if (patientExists.length !== 0) throw new Error("User alredy exists")
    const patient = await accessRepository.createPatient(name, email, cpf, password);
    return patient;
}

async function loginPatient(email, password) {
    const { rows: users } = await accessRepository.findPatientByEmail(email);
    if (users.length === 0) throw errors.invalidCredentialsError();
    const [user] = users;

    const passwordOk = await bcrypt.compare(password, user.password);
    if (!passwordOk) throw errors.invalidCredentialsError();

    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 });
    return token;
}

export default { registerPatient, loginPatient };

