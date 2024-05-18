import jwt from "jsonwebtoken";
import { catchAsyncError } from './../utils/catchAsyncError.js';
import { AppError } from './../utils/AppError.js';
import userModel from './../DB/models/user.model.js';

const generateTokenAndSetCookie = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("authToken", token, {
    httpOnly: true,
    secure: process.env.MODE !== "dev",
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });
};

const protectedRoute = catchAsyncError(async (req,res)=>{
  const token = req.cookie.authToken

  if(!token){
    return next(new AppError("Unauthorized - No Token Provided",404))
  }
  const decoded = jwt.verify(token,process.env.JWT_SECRET)

  if(!decoded){
    return next(new AppError("Unauthorized - Invalid Token",401))
  }
  
  const user = await userModel.findById(decoded._id).select("-password")

  if(!user){
    return next(new AppError("User not found",404))
  }
  req.user = user
  next()

})
export { generateTokenAndSetCookie,protectedRoute };
