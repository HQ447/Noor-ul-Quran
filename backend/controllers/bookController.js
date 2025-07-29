import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json({ books });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books." });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    const thumbnail = req.files["thumbnail"]?.[0]?.path;
    const pdf = req.files["pdf"]?.[0]?.path;

    if (!title || !author || !thumbnail || !pdf) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newBook = new Book({ title, author, thumbnail, pdf });
    await newBook.save();

    res.status(201).json({ book: newBook });
  } catch (err) {
    res.status(500).json({ message: "Error adding book." });
  }
};
