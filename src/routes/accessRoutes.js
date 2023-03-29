import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
const accessRouter = Router()

 
accessRouter.post("/sign-in-patient")
accessRouter.post("/sign-up-patient") 
accessRouter.post("/sign-in-doctor")
accessRouter.post("/sign-up-doctor")
accessRouter.delete("/logout/:token")

export default accessRouter