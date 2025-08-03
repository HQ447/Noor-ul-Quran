import express from "express";
import upload from "../middlewares/bookUpload.js";
import {
  addBook,
  deleteBook,
  getBooks,
} from "../controllers/BookController.js";
import { tokenVerifier } from "../middlewares/tokenVerifier.js";

const router = express.Router();

router.get("/books", getBooks);
router.delete("/deleteBook/:id", tokenVerifier, deleteBook);
router.post(
  "/add-book",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "pdf", maxCount: 1 },
  ]),
  tokenVerifier,
  addBook
);

export default router;
