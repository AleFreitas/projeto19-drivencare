import errors from '../errors/index.js';
import specialtyRepository from '../repositories/specialtyRepositories.js'

async function registerSpecialty(name) {
    const specialtyExists = await specialtyRepository.findSpecialty(name)
    if (specialtyExists.length !== 0) throw errors.conflictError("Specialty already exists")
    const specialty = await specialtyRepository.createSpecialty(name);
    return specialty;
}

export default {registerSpecialty}