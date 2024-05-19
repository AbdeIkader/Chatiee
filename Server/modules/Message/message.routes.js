import { Router } from "express";
const messageRouter = Router();
import * as message from "./message.controller.js";
import { protectedRoute } from "../../middleware/authToken.js";

messageRouter.post("/send/:id", protectedRoute, message.sendMessage);
messageRouter.get("/:id", protectedRoute, message.getMessage);

export default messageRouter;
