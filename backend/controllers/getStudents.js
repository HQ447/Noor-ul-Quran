import User from "../models/User.js";

const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" });
    if (!students) return res.json({ message: "no students found" });

    res.json({ message: "Studennts fetch successfully", students });
  } catch (error) {
    console.log("error in getting student", error);
  }
};

export default getAllStudents;
