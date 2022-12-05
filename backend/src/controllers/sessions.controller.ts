import { Request, Response } from "express";
import createSessionService from "../services/sessions/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  const loginData = req.body;
  const token = await createSessionService(loginData);
  return res.json({ token });
};

export { createSessionController };
