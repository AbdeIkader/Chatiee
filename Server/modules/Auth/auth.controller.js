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
  const boyProfilePicture = `https://asset.cloudinary.com/dbpvx37nc/fa534bec3c11074c407903bcaabffad5`;
  const girlProfilePicture = `https://asset.cloudinary.com/dbpvx37nc/fa534bec3c11074c407903bcaabffad5`;
  const newUser = new userModel({
    fullName,
    userName,
    password,
    gender,
    profilePicture: gender === "Male" ? boyProfilePicture : girlProfilePicture,
  });
  if (newUser) {
    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();
    res.status(201).json({ success: true, message: "User added successfully" });
  }
});

const signIn = catchAsyncError(async (req, res) => {
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
    success: true,
    message: "Logged in successfully!",
  });
});

const logOut = catchAsyncError(async (req, res) => {
  res.cookie("authToken", "", {
    maxAge: 0,
  });
  res.status(200).json({ success: true, message: "Logged out successfully!" });
});
export { signUp, signIn, logOut };
