import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.midleware";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use(handleErrorMiddleware);

export default app;
