import { Router } from "express";
import authUser from "../middlewares/authUser.middleware";
import validationSchema from "../middlewares/validationSchema.middleware";
import { registerSchema } from "../schemas/customers.schema";

import {
  createContactController,
  listContactsController,
  getContactController,
  updateContactController,
  removeContactController,
} from "../controllers/contacts.controller";

const router = Router();

const contactRoutes = () => {
  router.post("", authUser, validationSchema(registerSchema), createContactController);
  router.get("", authUser, listContactsController);
  router.get("/:id", authUser, getContactController);
  router.patch("/:id", authUser, updateContactController);
  router.delete("/:id", authUser, removeContactController);

  return router;
};

export default contactRoutes;
