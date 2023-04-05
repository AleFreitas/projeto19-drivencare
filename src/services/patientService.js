import errors from '../errors/index.js';
import patientRepository from '../repositories/patientRepositories.js';
import specialtyRepository from '../repositories/specialtyRepositories.js';
import addressRepository from '../repositories/addressRepositories.js';

async function getDoctorsByCity(city) {
    const cityExists = await addressRepository.findCity(city)
    if (cityExists.length === 0) throw errors.notFoundAtQueryError(city,"city")
    const doctors = await patientRepository.findDoctorsByCity(cityExists[0].id)
    return doctors;
}

async function getDoctorsBySpecialty(specialty) {
    const specialtyExists = await specialtyRepository.findSpecialty(specialty)
    if (specialtyExists.length === 0) throw errors.notFoundAtQueryError(specialty, "specialties")
    const doctors = await patientRepository.findDoctorsBySpecialty(specialtyExists[0].id)
    return doctors;
}

async function getDoctorsByName(name) {
    const doctors = await patientRepository.findDoctorsByName(name)
    return doctors;
}

export default {getDoctorsByName, getDoctorsBySpecialty, getDoctorsByCity}


