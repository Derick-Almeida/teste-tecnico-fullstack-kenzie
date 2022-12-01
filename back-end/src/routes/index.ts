import { Express } from "express";
import customerRoutes from "./customer.routes";
import sessionRoutes from "./session.routes";

const appRoutes = (app: Express) => {
  app.use("", customerRoutes());
  app.use("/login", sessionRoutes());
};

export default appRoutes;
