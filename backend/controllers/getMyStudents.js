import User from "../models/User.js";

const getMyStudents = async (req, res) => {
  const id = req.user.id;
  try {
    const students = await User.find({ role: "student", teacherId: id });
    if (!students) return res.json({ message: "no students found" });

    res.json({ message: "Studennts fetch successfully", students });
  } catch (error) {
    console.log("error in getting student", error);
  }
};

export default getMyStudents;
