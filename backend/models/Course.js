import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    thumbnail: { type: String, required: true }, // Cloudinary URL
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
