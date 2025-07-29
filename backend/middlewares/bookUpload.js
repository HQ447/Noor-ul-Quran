import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    const ext = file.originalname.split(".").pop();
    const baseName = file.originalname.replace(/\.[^/.]+$/, "");

    const isPdf = file.fieldname === "pdf";

    return {
      folder: isPdf ? "book_pdfs" : "book_thumbnails",
      resource_type: "auto",
      allowed_formats: isPdf ? ["pdf"] : ["jpg", "jpeg", "png"],
      public_id: isPdf ? `${baseName}` : baseName, // 👈 adds .pdf to the filename
    };
  },
});

const upload = multer({ storage });

export default upload;
