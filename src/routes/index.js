import { Router } from "express";
import accessRouter from "./accessRoutes.js";
import specialtyRouter from "./specialtyRoutes.js";

const routes = Router()
routes.use(accessRouter)
routes.use(specialtyRouter)

export default routes