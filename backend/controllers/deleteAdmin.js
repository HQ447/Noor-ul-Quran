import User from "../models/User.js";

const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const Admin = await User.findById(id);
    if (!Admin) res.json({ message: "Admin not found" });

    await User.findByIdAndDelete(id);

    res.json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.log("error", error);
  }
};

export default deleteAdmin;
