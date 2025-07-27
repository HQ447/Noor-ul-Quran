// controllers/auth/registerController.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, secret } = req.body;

    const existingAdmin = await User.findOne({ email });
    if (existingAdmin)
      return res.status(400).json({ message: "Email already in use" });

    if (secret !== process.env.ADMIN_SECRET) {
      return res.status(403).json({ message: "Invalid Admin Secret" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new User({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });
    await newAdmin.save();

    res.status(201).json({ message: "Admin account created", newAdmin });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
