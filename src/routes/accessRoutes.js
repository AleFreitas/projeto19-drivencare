import { Router } from "express";
import { signUpPatient } from "../controllers/accessControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signUpPatientSchema } from "../schemas/accessSchemas.js";
const accessRouter = Router()

 
accessRouter.post("/sign-up-patient", validateSchema(signUpPatientSchema), signUpPatient)

export default accessRouter