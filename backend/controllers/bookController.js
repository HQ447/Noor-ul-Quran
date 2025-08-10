import Book from "../models/Book.js";

export const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const thumbnail = req.files["thumbnail"]?.[0]?.path;
    const pdf = req.files["pdf"]?.[0]?.path; // Use Cloudinary URL directly

    if (!title || !author || !thumbnail || !pdf) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate file types
    if (!req.files["pdf"][0].mimetype.includes("pdf")) {
      return res.status(400).json({ message: "PDF file is required." });
    }
    if (!req.files["thumbnail"][0].mimetype.includes("image")) {
      return res.status(400).json({ message: "Thumbnail must be an image." });
    }

    // Sanitize file name for PDF
    const pdfFileName = req.files["pdf"][0].originalname
      .replace(/\s+/g, "_") // Replace spaces with underscores
      .replace(/\.[^/.]+$/, ""); // Remove extension

    // Re-upload PDF with sanitized name if needed (optional, if file name is causing issues)
    const newBook = new Book({
      title,
      author,
      thumbnail,
      pdf,
    });

    await newBook.save();

    res.status(201).json({ book: newBook });
  } catch (err) {
    console.error("Error adding book:", err);
    res.status(500).json({ message: "Error adding book." });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json({ books });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books." });
  }
};
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) return res.json({ message: "Book Not found" });

    await Book.findByIdAndDelete(id);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books." });
  }
};
