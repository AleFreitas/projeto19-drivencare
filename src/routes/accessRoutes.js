import { Router } from "express";
import accessControllers from "../controllers/accessControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signInPatientSchema, signUpPatientSchema } from "../schemas/accessSchemas.js";
const accessRouter = Router()

 
accessRouter.post("/sign-up-patient", validateSchema(signUpPatientSchema), accessControllers.signUpPatient)
accessRouter.post("/sign-in-patient", validateSchema(signInPatientSchema), accessControllers.signInPatient)

export default accessRouter