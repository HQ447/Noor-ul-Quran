import Course from "../models/Course.js";

export const addCourse = async (req, res) => {
  try {
    const { title, description, duration, level } = req.body;

    if (!title || !req.file) {
      return res
        .status(400)
        .json({ message: "Title and thumbnail are required." });
    }

    const thumbnailUrl = req.file.path; // Cloudinary URL

    const newCourse = new Course({
      title,
      description,
      level,
      duration,
      thumbnail: thumbnailUrl,
    });

    await newCourse.save();

    res.status(201).json({
      message: "Course created successfully.",
      course: newCourse,
    });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
