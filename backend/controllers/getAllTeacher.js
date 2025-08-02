import User from "../models/User.js";

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: { $ne: "student" } }); // not equal to 'student'

    if (!teachers || teachers.length === 0) {
      return res.json({ message: "No teachers found" });
    }

    res.json({ message: "Teachers fetched successfully", teachers });
  } catch (error) {
    console.log("Error in getting teachers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default getAllTeachers;
