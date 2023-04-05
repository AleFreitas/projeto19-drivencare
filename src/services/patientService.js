import errors from '../errors/index.js';
import patientRepository from '../repositories/patientRepositories.js';

async function getDoctorsByCity(city) {
    const cityExists = await addressRepository.findCity(city)
    if (cityExists.length === 0) throw errors.notFoundAtQueryError(city,"city")
    const doctors = await patientRepository.findDoctorsBySpecialty(city)
    return doctors;
}

async function getDoctorsBySpecialty(specialty) {
    const specialtyExists = await specialtyRepository.findSpecialty(specialty)
    if (specialtyExists.length === 0) throw errors.notFoundAtQueryError(specialty, "specialties")
    const doctors = await patientRepository.findDoctorsBySpecialty(specialty)
    return doctors;
}

async function getDoctorsByName(name) {
    const doctors = await patientRepository.findDoctorsByName(name)
    return doctors;
}

export default {getDoctorsByName}


