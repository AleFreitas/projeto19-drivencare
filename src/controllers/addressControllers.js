import addressService from "../services/addressService.js";

async function createState(req, res, next) {
    try {
        const { name } = req.body;
        const state = await addressService.registerState(name);
        return res.sendStatus(201);
    } catch (err) {
        return next(err);
    }
}

async function createCity(req, res, next) {
    try {
        const { name, stateName } = req.body;
        const city = await addressService.registerCity(name,stateName);
        return res.sendStatus(201);
    } catch (err) {
        return next(err);
    }
}

export default {createState, createCity}