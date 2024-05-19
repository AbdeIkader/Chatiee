import { catchAsyncError } from "./../../utils/catchAsyncError.js";
import userModel from "../../DB/models/user.model.js";

const getAllUsers = catchAsyncError(async (req, res) => {
  const user = req.user._id;

  const filteredUsers = await userModel
    .find({
      _id: { $ne: user },
    })
    .select("-password");

  res.status(200).json(filteredUsers);
});
export { getAllUsers };
