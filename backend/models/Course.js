import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String, required: true }, // Cloudinary URL
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
