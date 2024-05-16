import jwt from "jsonwebtoken";

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

export { generateTokenAndSetCookie };
