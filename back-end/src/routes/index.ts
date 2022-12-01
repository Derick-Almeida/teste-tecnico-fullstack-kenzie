import { Express } from "express";
import contactRoutes from "./contact.routes";
import customerRoutes from "./customer.routes";
import sessionRoutes from "./session.routes";

const appRoutes = (app: Express) => {
  app.use("", customerRoutes());
  app.use("/login", sessionRoutes());
  app.use("/contacts", contactRoutes());
};

export default appRoutes;
