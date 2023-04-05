import { Router } from "express";
import addressControllers from "../controllers/addressControllers.js";
import {registerStateSchema, registerCitySchema} from '../schemas/addressSchemas.js'
import { validateSchema } from "../middlewares/validateSchema.js";
const addressRouter = Router()
 
addressRouter.post("/state", validateSchema(registerStateSchema), addressControllers.createState)
addressRouter.post("/city", validateSchema(registerCitySchema), addressControllers.createCity)

export default addressRouter