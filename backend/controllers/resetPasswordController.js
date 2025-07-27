import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const resetPasswordController = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("reset pass req :", req.body);
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    user.password = await bcrypt.hash(password, 10);
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
