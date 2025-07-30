import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";
// Setup Cloudinary storage for images
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "admin_profiles", // you can change this folder name
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 300, height: 300, crop: "limit" }],
  },
});

// Middleware for uploading admin profile images
export const uploadCloud = multer({ storage });
