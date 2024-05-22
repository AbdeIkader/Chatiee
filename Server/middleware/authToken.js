import jwt from "jsonwebtoken";
import { catchAsyncError } from "./../utils/catchAsyncError.js";
import { AppError } from "./../utils/AppError.js";
import userModel from "./../DB/models/user.model.js";

const generateTokenAndSetCookie = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  // console.log("Generated token:", token);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only secure if in production
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // Use 'lax' for local development
  });

  // console.log("Cookie set with token:", token);
};

const protectedRoute = catchAsyncError(async (req, res, next) => {
  const token = req.cookies.jwt;
  // console.log(token);

  if (!token) {
    return next(new AppError("Unauthorized - No Token Provided", 404));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return next(new AppError("Unauthorized - Invalid Token", 401));
  }

  const user = await userModel.findById(decoded.userId).select("-password");

  if (!user) {
    return next(new AppError("User not found", 404));
  }

  req.user = user;
  next();
});
export { generateTokenAndSetCookie, protectedRoute };
