import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import accessRouter from "./routes/accessRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use([accessRouter]);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor funfando na porta: ${port}`));