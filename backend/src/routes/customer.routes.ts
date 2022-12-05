import { Router } from "express";
import authUser from "../middlewares/authUser.middleware";
import validationSchema from "../middlewares/validationSchema.middleware";
import { registerSchema } from "../schemas/customers.schema";

import {
  createCustomerController,
  deleteCustomerController,
  getCustomerController,
  updateCustomerController,
} from "../controllers/customers.controller";

const router = Router();

const customerRoutes = () => {
  router.post("/register", validationSchema(registerSchema), createCustomerController);
  router.get("/profile", authUser, getCustomerController);
  router.patch("/profile", authUser, updateCustomerController);
  router.delete("/profile", authUser, deleteCustomerController);

  return router;
};

export default customerRoutes;
