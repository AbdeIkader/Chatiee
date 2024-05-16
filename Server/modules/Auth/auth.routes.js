import { Router } from "express";
const authRouter = Router();
import * as user from "./auth.controller.js";

authRouter.post("/signup", user.signUp);

export default authRouter;
