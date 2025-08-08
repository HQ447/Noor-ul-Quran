import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Book, Download, Eye, FileText } from "lucide-react";
// import quran from "../../../assets/pdf/quran.pdf";
// import qaida from "../../../assets/pdf/qaida.pdf";
// import book from "../../../assets/pdf/book.pdf";
const IslamicLibrary = () => {
  // Sample books data with PDF links
  const [books, setBooks] = useState([]);
  const BASE_URL = "https://noor-ul-quran-backend-gq68.onrender.com";

  useEffect(() => {
    fetch(`${BASE_URL}/api/books`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);
  // const books = [
  //   {
  //     id: 1,
  //     title: "The Holy Quran",
  //     author: "Arabic 15 Lines Quran",
  //     coverImg:
  //       "https://i.pinimg.com/474x/67/cd/ff/67cdff79947266fb9393815eaa02bb23.jpg",
  //     pdfUrl: quran,
  //     description: "Holy Quran with Arabic text and English translation",
  //   },
  //   {
  //     id: 2,
  //     title: "Noorani Qaida",
  //     author: "Noorani Qaida Urdu",
  //     coverImg:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBHaNFAULretljI3ok8v5yd42TJgaSRukB78U2T849y_Ax6msibsYNz4uu7yCRysHrxs&usqp=CAU",
  //     pdfUrl: qaida,
  //     description: "Classical commentary on the Holy Quran",
  //   },
  //   {
  //     id: 3,
  //     title: "Lughat ul Muslim",
  //     author: "Sheikh Mosa Al-Iraqi",
  //     coverImg: "https://online.pubhtml5.com/qtvu/hbsg/files/page/1.jpg",
  //     pdfUrl: book,
  //     description: "Authentic collection of Prophetic traditions",
  //   },
  // ];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <section className="relative py-12 overflow-hidden text-white bg-gradient-to-r from-green-600 to-emerald-600">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM30 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-6xl px-6 mx-auto text-center lg:px-12">
          <div className="mb-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold text-black bg-white rounded-full bg-opacity-20">
              📚 Downloads
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            Nourish Your Soul with
            <span className="block text-yellow-300">
              Authentic Islamic Texts
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm leading-relaxed text-green-100 md:text-lg ">
            Explore our collection of sacred Islamic books available for free
            download.
          </p>
        </div>
      </section>

      <div className="container px-4 py-8 mx-auto">
        {/* Books Grid */}
        <div className="">
          {books.length == 0 ? (
            <p className="flex text-xl font-bold justify-self-center text-bold">
              No Book Found
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {books.map((book) => (
                <div
                  key={book._id}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl group"
                >
                  {" "}
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
                  {/* Book Cover */}
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={book.thumbnail}
                      alt={book.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    {/* Book Info */}

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                      <a
                        href={book.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-white transition-all rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        title="View PDF"
                      >
                        <Eye className="w-5 h-5" />
                      </a>
                      <a
                        href={book.pdf}
                        target="_blank"
                        download
                        className="p-2 text-white transition-all rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                        title="Download PDF"
                      >
                        <Download className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  {/* Book Details */}
                  <div className="p-4">
                    <div className="mb-3">
                      <h3 className="mb-1 text-lg font-bold text-gray-800 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="mb-2 text-sm text-gray-600">
                        {book.author}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={book.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center flex-1 gap-1 px-3 py-2 text-sm font-medium text-white transition-all duration-300 rounded-md bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </a>
                      <a
                        href={book.pdf}
                        target="_blank"
                        download
                        className="flex items-center justify-center flex-1 gap-1 px-3 py-2 text-sm font-medium text-white transition-all duration-300 rounded-md bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IslamicLibrary;
