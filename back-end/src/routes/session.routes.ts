import { Router } from "express";
import { createSessionController } from "../controllers/sessions.controller";
import validationSchema from "../middlewares/validationSchema.middleware";
import { sessionSchema } from "../schemas/session.schema";

const router = Router();

const sessionRoutes = () => {
  router.post("", validationSchema(sessionSchema), createSessionController);

  return router;
};

export default sessionRoutes;
