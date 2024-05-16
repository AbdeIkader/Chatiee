import express from "express";
import dotenv from "dotenv";
import { globalErrorHandling } from "./middleware/globalErrorHandling.js";
import { AppError } from "./utils/AppError.js";
import { dbConnection } from "./DB/dbConnection.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.all("*", (req, res, next) => {
  next(new AppError("Endpoint was not found", 404));
});

app.use(globalErrorHandling);

dbConnection();
//Listen to the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
