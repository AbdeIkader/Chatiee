import { Router } from "express";
const authRouter = Router();
import * as user from "./auth.controller.js";

authRouter.post("/signup", user.signUp);
authRouter.post("/signin", user.signIn);

export default authRouter;
