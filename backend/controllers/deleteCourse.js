import Course from "../models/Course.js";

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) res.json({ message: "course not found" });

    await Course.findByIdAndDelete(id);

    res.json({ message: "course deleted successfully" });
  } catch (error) {
    console.log("error", error);
  }
};

export default deleteCourse;
