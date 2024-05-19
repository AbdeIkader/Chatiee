import { Router } from "express";
const userRouter = Router();
import * as user from "./user.controller.js";
import { protectedRoute } from "../../middleware/authToken.js";

userRouter.get("/", protectedRoute, user.getAllUsers);

export default userRouter;
