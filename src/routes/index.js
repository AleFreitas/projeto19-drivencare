import { Router } from "express";
import accessRouter from "./accessRoutes.js";
import addressRouter from "./addressRoutes.js";
import patientRouter from "./patientRoutes.js";
import specialtyRouter from "./specialtyRoutes.js";

const routes = Router()
routes.use(accessRouter)
routes.use(specialtyRouter)
routes.use(addressRouter)
routes.use(patientRouter)

export default routes