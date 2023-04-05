import { Router } from "express";
import accessControllers from "../controllers/accessControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signInSchema, signUpPatientSchema, signUpDoctorSchema } from "../schemas/accessSchemas.js";
const accessRouter = Router()

 
accessRouter.post("/sign-up-patient", validateSchema(signUpPatientSchema), accessControllers.signUpPatient)
accessRouter.post("/sign-up-doctor", validateSchema(signUpDoctorSchema), accessControllers.signUpDoctor)
accessRouter.post("/sign-in-patient", validateSchema(signInSchema), accessControllers.signInPatient)
accessRouter.post("/sign-in-doctor", validateSchema(signInSchema), accessControllers.signInDoctor)

export default accessRouter