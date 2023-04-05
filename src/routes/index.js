import { Router } from "express";
import accessRouter from "./accessRoutes.js";
import addressRouter from "./addressRoutes.js";
import specialtyRouter from "./specialtyRoutes.js";

const routes = Router()
routes.use(accessRouter)
routes.use(specialtyRouter)
routes.use(addressRouter)

export default routes