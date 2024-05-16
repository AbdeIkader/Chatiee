import { AppError } from "./../../utils/AppError.js";
import { userModel } from "./../../DB/models/user.model.js";
import { catchAsycError } from "./../../utils/catchAsyncError.js";
import { generateTokenAndSetCookie } from "../../middleware/authToken.js";

const signUp = catchAsycError(async (req, res) => {
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

export { signUp };
