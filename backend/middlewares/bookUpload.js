import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const ext = file.originalname.split(".").pop();
    const baseName = file.originalname.replace(/\s+/g, "_"); // Replace spaces with underscores
    const isPdf = file.fieldname === "pdf";

    return {
      folder: isPdf ? "book_pdfs" : "book_thumbnails",
      resource_type: isPdf ? "raw" : "image",
      allowed_formats: isPdf ? ["pdf"] : ["jpg", "jpeg", "png"],
      public_id: isPdf ? baseName : baseName.replace(/\.[^/.]+$/, ""), // Keep extension for PDFs
      access_mode: "public",
      invalidate: true,
    };
  },
});

const upload = multer({ storage });

export default upload;
