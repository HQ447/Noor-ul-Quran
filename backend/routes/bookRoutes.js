import express from "express";
import upload from "../middlewares/bookUpload.js";
import { addBook, getBooks } from "../controllers/BookController.js";

const router = express.Router();

router.get("/books", getBooks);
router.post(
  "/add-book",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "pdf", maxCount: 1 },
  ]),
  addBook
);

export default router;
