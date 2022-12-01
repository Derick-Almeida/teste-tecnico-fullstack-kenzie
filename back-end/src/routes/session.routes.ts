import { Router } from "express";
import validationSchema from "../middlewares/validationSchema.middleware";
import { sessionSchema } from "../schemas/session.schema";

import { createSessionController } from "../controllers/sessions.controller";

const router = Router();

const sessionRoutes = () => {
  router.post("", validationSchema(sessionSchema), createSessionController);

  return router;
};

export default sessionRoutes;
