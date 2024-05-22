import { AppError } from "./../../utils/AppError.js";
import userModel from "./../../DB/models/user.model.js";
import { catchAsyncError } from "./../../utils/catchAsyncError.js";
import { generateTokenAndSetCookie } from "../../middleware/authToken.js";
import bcrypt from "bcryptjs";

const signUp = catchAsyncError(async (req, res, next) => {
  const { fullName, userName, password, confirmPassword, gender } = req.body;

  if (password !== confirmPassword) {
    return next(
      new AppError("Password and Confirm Password doesn't match!", 400)
    );
  }
  const isUserExist = await userModel.findOne({ userName });
  if (isUserExist) {
    return next(new AppError("User already exists!", 400));
  }
  const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
  const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=[${userName}]`;
  const newUser = new userModel({
    fullName,
    userName,
    password,
    gender,
    profilePic: gender === "Male" ? boyProfilePicture : girlProfilePicture,
  });
  if (newUser) {
    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic, });
  }
});

const signIn = catchAsyncError(async (req, res,next) => {
  const { userName, password } = req.body;

  // Check if email and password are provided
  if (!userName || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // Try to find the user by username
  const user = await userModel.findOne({ userName });

  if (!user) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // Check if the password is correct
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // Generate a token for the trainee
  generateTokenAndSetCookie(user._id, res);

  // Send the token to the trainee
  res.status(200).json({
    _id: user._id,
    fullName: user.fullName,
    userName: user.userName,
    profilePic: user.profilePic,
  });
});

const logOut = catchAsyncError(async (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 0,
  });
  res.status(200).json({ success: true, message: "Logged out successfully!" });
});
export { signUp, signIn, logOut };
