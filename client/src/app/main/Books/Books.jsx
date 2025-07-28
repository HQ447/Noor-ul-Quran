import React from "react";
import { Book, Download, Eye } from "lucide-react";
import quran from "../../../assets/pdf/quran.pdf";
import qaida from "../../../assets/pdf/qaida.pdf";
import book from "../../../assets/pdf/book.pdf";
const IslamicLibrary = () => {
  // Sample books data with PDF links
  const books = [
    {
      id: 1,
      title: "The Holy Quran",
      author: "Arabic 15 Lines Quran",
      coverImg:
        "https://i.pinimg.com/474x/67/cd/ff/67cdff79947266fb9393815eaa02bb23.jpg",
      pdfUrl: quran,
      description: "Holy Quran with Arabic text and English translation",
    },
    {
      id: 2,
      title: "Noorani Qaida",
      author: "Noorani Qaida Urdu",
      coverImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBHaNFAULretljI3ok8v5yd42TJgaSRukB78U2T849y_Ax6msibsYNz4uu7yCRysHrxs&usqp=CAU",
      pdfUrl: qaida,
      description: "Classical commentary on the Holy Quran",
    },
    {
      id: 3,
      title: "Lughat ul Muslim",
      author: "Sheikh Mosa Al-Iraqi",
      coverImg: "https://online.pubhtml5.com/qtvu/hbsg/files/page/1.jpg",
      pdfUrl: book,
      description: "Authentic collection of Prophetic traditions",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <div className="text-white shadow-xl bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
        <div className="container px-4 py-6 mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Book className="w-10 h-10 mr-3" />
              <h1 className="text-3xl font-bold">Islamic Library</h1>
            </div>
            <p className="text-lg opacity-90">
              Access Sacred Islamic Literature
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto">
        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl group"
            >
              {/* Book Cover */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={book.coverImg}
                  alt={book.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                  <a
                    href={book.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white transition-all rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    title="View PDF"
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a
                    href={book.pdfUrl}
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
                  <p className="mb-2 text-sm text-gray-600">{book.author}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={book.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 gap-1 px-3 py-2 text-sm font-medium text-white transition-all duration-300 rounded-md bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </a>
                  <a
                    href={book.pdfUrl}
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
      </div>

      {/* Footer */}
      <footer className="py-6 mt-12 text-white bg-gradient-to-r from-emerald-800 via-green-800 to-teal-800">
        <div className="container px-4 mx-auto text-center">
          <div className="flex items-center justify-center mb-3">
            <Book className="w-6 h-6 mr-2" />
            <span className="text-xl font-bold">Islamic Library</span>
          </div>
          <p className="text-sm text-emerald-100">
            Empowering Islamic education through accessible digital resources
          </p>
        </div>
      </footer>
    </div>
  );
};

export default IslamicLibrary;
