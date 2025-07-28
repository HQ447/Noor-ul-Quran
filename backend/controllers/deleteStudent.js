import User from "../models/User.js";

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await User.findById(id);
    if (!student) res.json({ message: "Student not found" });

    await User.findByIdAndDelete(id);

    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    console.log("error", error);
  }
};

export default deleteStudent;
