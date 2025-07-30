// --- Frontend: Books.jsx ---
import React, { useState, useEffect } from "react";
import { Plus, X, FileText } from "lucide-react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    thumbnail: null,
    pdf: null,
  });
const BASE_URL="http://localhost:8000"
  useEffect(() => {
    fetch(`${BASE_URL}/api/books`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBooks(data.books || []));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newBook.title);
    formData.append("author", newBook.author);
    formData.append("thumbnail", newBook.thumbnail);
    formData.append("pdf", newBook.pdf);

    const res = await fetch("http://localhost:8000/api/add-book", {
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
    } else {
      alert(result.message || "Error adding book");
    }
  };

  return (
    <div className="relative p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Books</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 text-white bg-green-600 rounded shadow hover:bg-green-700"
        >
          <Plus className="inline mr-1" /> Add Book
        </button>
      </div>

      {books.length === 0 ? (
        <p className="text-gray-600">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {books.map((book) => (
            <div key={book._id} className="p-4 border shadow rounded-xl">
              <img
                src={book.thumbnail}
                alt={book.title}
                className="object-cover w-full h-48 mb-4 rounded"
              />
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="mb-2 text-sm text-gray-500">by {book.author}</p>
              <a href={book.pdf} target="_blank">
                Download PDF
              </a>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-lg p-6 bg-white shadow-xl rounded-xl"
          >
            <button
              onClick={() => setModalOpen(false)}
              type="button"
              className="absolute text-gray-500 top-2 right-2 hover:text-red-500"
            >
              <X />
            </button>
            <h2 className="mb-4 text-xl font-bold">Add New Book</h2>
            <input
              type="text"
              placeholder="Book Title"
              required
              className="w-full px-3 py-2 mb-3 border rounded"
              value={newBook.title}
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Author"
              required
              className="w-full px-3 py-2 mb-3 border rounded"
              value={newBook.author}
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
            />
            <input
              type="file"
              accept="image/*"
              required
              className="w-full mb-3"
              onChange={(e) =>
                setNewBook({ ...newBook, thumbnail: e.target.files[0] })
              }
            />
            <input
              type="file"
              accept="application/pdf"
              required
              className="w-full mb-4"
              onChange={(e) =>
                setNewBook({ ...newBook, pdf: e.target.files[0] })
              }
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
            >
              Add Book
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Books;
