import express from "express";
import dotenv from "dotenv";
import { globalErrorHandling } from "./middleware/globalErrorHandling.js";
import { AppError } from "./utils/AppError.js";
import { dbConnection } from "./DB/dbConnection.js";
import authRouter from "./modules/Auth/auth.routes.js";
import messageRouter from "./modules/Message/message.routes.js";
import cookieParser from "cookie-parser";
import userRouter from './modules/User/user.routes.js';
import cors from 'cors';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
// Dynamically set CORS origin based on environment
const allowedOrigins = [
  process.env.LOCAL_FRONTEND_URL,
  process.env.PRODUCTION_FRONTEND_URL,
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials (cookies) in CORS
}));

app.use(express.json());
app.use(cookieParser())
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/users", userRouter);


app.all('*', (req, res, next) => {
  next(new AppError('Endpoint was not found', 404));
});

dbConnection();
app.use(globalErrorHandling);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
