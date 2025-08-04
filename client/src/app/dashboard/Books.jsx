import React, { useState, useEffect } from "react";
import {
  Plus,
  X,
  FileText,
  Sparkles,
  Download,
  Eye,
  BookOpen,
} from "lucide-react";
import { IoTrashBin } from "react-icons/io5";

// Islamic Pattern Background Component
const IslamicPattern = () => (
  <div className="absolute inset-0 pointer-events-none opacity-5">
    <div className="grid h-full grid-cols-12 gap-3">
      {[...Array(96)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center text-emerald-400 animate-pulse"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <BookOpen className="w-3 h-3" />
        </div>
      ))}
    </div>
  </div>
);

const Books = () => {
  const [books, setBooks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    thumbnail: null,
    pdf: null,
  });
  const BASE_URL = "http://localhost:8000";

  const handleDeleteBook = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/api/deleteBook/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        fetchBooks();
      } else {
        console.error("Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const fetchBooks = async () => {
    fetch(`${BASE_URL}/api/books`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBooks(data.books || []));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newBook.title);
    formData.append("author", newBook.author);
    formData.append("description", newBook.description);
    formData.append("thumbnail", newBook.thumbnail);
    formData.append("pdf", newBook.pdf);

    const res = await fetch(`${BASE_URL}/api/add-book`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    });

    const result = await res.json();
    if (res.ok) {
      setBooks((prev) => [...prev, result.book]);
      setModalOpen(false);
      setNewBook({
        title: "",
        author: "",
        thumbnail: null,
        pdf: null,
      });
    } else {
      alert(result.message || "Error adding book");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <IslamicPattern />

      {/* Header Section */}
      <div className="relative z-10 p-4 md:p-6">
        <div className="flex flex-col justify-between gap-6 mb-8 md:flex-row md:items-center">
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div>
                <h2 className="text-xl font-bold text-transparent md:text-2xl bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text">
                  Library Management
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <Sparkles className="w-4 h-4 text-emerald-500" />
                  <p className="text-xs font-medium text-emerald-600 md:text-base">
                    Manage Add/Drop Books
                  </p>
                </div>
              </div>
            </div>
            <div className="w-32 h-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600"></div>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-2 text-xs font-bold text-white transition-all duration-300 transform shadow-lg md:py-3 md:text-sm rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:-translate-y-1 group"
          >
            <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
            <span>Add New Book</span>
          </button>
        </div>

        {/* Books Grid */}
        {books.length === 0 ? (
          <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 text-center border shadow-xl bg-white/90 backdrop-blur-sm rounded-2xl border-emerald-200/50">
            <div className="flex items-center justify-center mb-6 rounded-full w-17 h-17 bg-gradient-to-br from-emerald-100 to-teal-100">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-800">
              No Books Found
            </h3>
            <p className="max-w-md text-xs text-gray-600">
              Start building your digital library by adding your first book
              using the "Add New Book" button above.
            </p>
          </div>
        ) : (
          <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            {books.map((book) => (
              <div
                key={book._id}
                className="relative overflow-hidden transition-all duration-500 transform border shadow-xl bg-white/95 backdrop-blur-sm rounded-2xl border-emerald-200/50 hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-300/70 group"
              >
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-16 h-16 transition-opacity duration-300 pointer-events-none opacity-10 group-hover:opacity-20">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-emerald-500"
                  >
                    <circle cx="50" cy="20" r="6" fill="currentColor" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                    <circle cx="50" cy="80" r="6" fill="currentColor" />
                    <circle cx="20" cy="35" r="4" fill="currentColor" />
                    <circle cx="80" cy="35" r="4" fill="currentColor" />
                    <circle cx="20" cy="65" r="4" fill="currentColor" />
                    <circle cx="80" cy="65" r="4" fill="currentColor" />
                  </svg>
                </div>

                {/* Book Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600">
                      📚 Islamic Book
                    </span>
                  </div>
                  <div
                    onClick={() => handleDeleteBook(book._id)}
                    className="absolute p-2 bg-white rounded-md top-4 right-4"
                  >
                    <IoTrashBin className="w-5 h-5 text-red-600" />
                  </div>
                </div>

                {/* Book Content */}
                <div className="relative z-10 px-4 py-3">
                  <div className="mb-2">
                    <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 transition-colors line-clamp-2 group-hover:text-emerald-700">
                      {book.title}
                    </h3>
                    <p className="text-sm font-medium capitalize text-emerald-600">
                      by {book.author}
                    </p>
                  </div>

                  {/* Book Info */}
                  <div className="p-3 mb-4 border rounded-xl bg-gradient-to-r from-emerald-50/60 to-teal-50/60 border-emerald-100/60">
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 font-medium text-emerald-700">
                        <FileText className="w-3 h-3" />
                        PDF Format
                      </span>
                      <span className="px-2 py-1 font-semibold rounded-full text-emerald-800 bg-emerald-100">
                        Available
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={book.pdf}
                      download
                      target="_blank"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transform hover:scale-105 active:scale-95"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold text-white transition-all duration-200 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg transform hover:scale-105 active:scale-95"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View PDF</span>
                    </a>
                  </div>
                </div>

                {/* Hover gradient border effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-2xl bg-gradient-to-br from-emerald-200/30 via-transparent to-teal-200/30 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="relative p-4 text-sm border shadow-2xl bg-white/95 backdrop-blur-lg rounded-2xl border-emerald-200/50"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                type="button"
                className="absolute p-2 text-gray-500 transition-colors rounded-full top-3 right-3 hover:text-red-500 hover:bg-red-50"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-lg font-bold text-gray-900">
                    Add New Book
                  </h2>
                </div>
                <p className="text-xs text-gray-600">
                  Fill in the details to add a new book to your library
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-xs font-medium text-gray-700">
                    Book Title *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter book title"
                    required
                    className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 transition-colors border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                    value={newBook.title}
                    onChange={(e) =>
                      setNewBook({ ...newBook, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-1 text-xs font-medium text-gray-700">
                    Description *
                  </label>
                  <textarea
                    type="text"
                    placeholder="Enter book title"
                    rows={1}
                    required
                    className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 transition-colors border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                    value={newBook.description}
                    onChange={(e) =>
                      setNewBook({ ...newBook, description: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-medium text-gray-700">
                    Author *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter author name"
                    required
                    className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 transition-colors border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                    value={newBook.author}
                    onChange={(e) =>
                      setNewBook({ ...newBook, author: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-medium text-gray-700">
                    Book Thumbnail *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    className="w-full px-3 py-2 text-sm text-gray-900 transition-colors border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                    onChange={(e) =>
                      setNewBook({ ...newBook, thumbnail: e.target.files[0] })
                    }
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-medium text-gray-700">
                    PDF File *
                  </label>
                  <input
                    type="file"
                    accept="application/pdf"
                    required
                    className="w-full px-3 py-2 text-sm text-gray-900 transition-colors border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                    onChange={(e) =>
                      setNewBook({ ...newBook, pdf: e.target.files[0] })
                    }
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 px-4 py-2 text-xs font-semibold text-gray-700 transition-all duration-200 transform bg-gray-100 rounded-xl hover:bg-gray-200 hover:scale-105 active:scale-95"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 transform shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Books;
