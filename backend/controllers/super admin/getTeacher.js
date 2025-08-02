import User from "../../models/User.js";

export const getTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await User.findById(id).select("-password");
    if (!teacher || teacher.role !== "admin") {
      return res.status(404).json({ message: "teacher not found" });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
