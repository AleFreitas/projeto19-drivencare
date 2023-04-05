import { Router } from "express";
import patientControllers from "../controllers/patientControllers.js";
import { getDoctorsSchema } from "../schemas/patientSchemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";
const patientRouter = Router()
 
patientRouter.get("/doctors", validateSchema(getDoctorsSchema), patientControllers.getDoctorInfo)

export default patientRouter