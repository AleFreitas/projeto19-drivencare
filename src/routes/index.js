import { Router } from "express";
import accessRouter from "./accessRoutes.js";

const routes = Router()
routes.use(accessRouter)

export default routes