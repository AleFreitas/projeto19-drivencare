import errors from '../errors/index.js';
import addressRepository from '../repositories/addressRepositories.js'

async function registerState(name) {
    const stateExists = await addressRepository.findState(name)
    if (stateExists.length !== 0) throw errors.conflictError("state already exists")
    const state = await addressRepository.createState(name);
    return state;
}

async function registerCity(name,stateName) {
    const cityExists = await addressRepository.findCity(name)
    const stateExists = await addressRepository.findState(stateName)
    if (cityExists.length !== 0) throw errors.conflictError("city already exists")
    if (stateExists.length === 0) throw errors.conflictError("state doesn't exists")
    const city = await addressRepository.createCity(name,stateExists[0].id);
    return city;
}

export default {registerState, registerCity}