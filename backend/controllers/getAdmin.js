import User from "../models/User.js";

const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" });
    if (!admins) return res.json({ message: "no admins found" });

    res.json({ message: "admins fetch successfully", admins });
  } catch (error) {
    console.log("error in getting admin", error);
  }
};

export default getAdmins;
