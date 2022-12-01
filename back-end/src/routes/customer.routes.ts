import { Router } from "express";
import {
  createCustomerController,
  deleteCustomerController,
  getCustomerController,
  updateCustomerController,
} from "../controllers/customers.controller";
import authUser from "../middlewares/authUser.middleware";
import validationSchema from "../middlewares/validationSchema.middleware";
import { customerSchema } from "../schemas/customers.schema";

const router = Router();

const customerRoutes = () => {
  router.post("/register", validationSchema(customerSchema), createCustomerController);
  router.get("/profile", authUser, getCustomerController);
  router.patch("/profile", authUser, updateCustomerController);
  router.delete("/profile", authUser, deleteCustomerController);

  return router;
};

export default customerRoutes;
