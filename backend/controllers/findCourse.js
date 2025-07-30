import Course from "../models/Course.js";

const findCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) return res.json({ message: "Course not found" });

    res.json({ message: "Course details are:", course });
  } catch (error) {
    console.log(error);
  }
};

export default findCourse;
