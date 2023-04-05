import specialtyService from "../services/specialtyService.js";

async function createSpecialty(req, res, next) {
    try {
        const { name } = req.body;
        const specialty = await specialtyService.registerSpecialty(name);
        return res.sendStatus(201);
    } catch (err) {
        return next(err);
    }
}

export default {createSpecialty}