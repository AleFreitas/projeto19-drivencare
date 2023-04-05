import { Router } from "express";
import specialtyControllers from '../controllers/specialtyControllers.js'
import { validateSchema } from "../middlewares/validateSchema.js";
import { registerSpecialtySchema } from "../schemas/specialtySchemas.js";
const specialtyRouter = Router()

 
specialtyRouter.post("/specialty", validateSchema(registerSpecialtySchema), specialtyControllers.createSpecialty)

export default specialtyRouter