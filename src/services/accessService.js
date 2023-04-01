import accessRepository from '../repositories/accessRepositories.js';

async function registerPatient(name, email, cpf, password) {
    const patientExists = await accessRepository.findPatient(email,cpf)
    if (patientExists.length!==0) throw new Error("User alredy exists")
    const patient = await accessRepository.createPatient(name, email, cpf, password);
    return patient;
}

export { registerPatient };

