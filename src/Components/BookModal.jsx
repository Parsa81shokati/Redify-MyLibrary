import React, { useState } from "react";

function BookModal({ book, onClose }) {
  const [showFull, setShowFull] = useState(false);

  const secureImage = book?.imageLinks?.thumbnail
    ? book.imageLinks.thumbnail.replace("http://", "https://")
    : "/no-cover-avalible.png";
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 ">
      <div className="relative bg-white w-[300px] sm:w-[500px] md:w-[900px]  md:max-h-[80vh] py-3 rounded-lg md:rounded-xl shadow-lg flex flex-col sm:flex-row overflow-hidden">
        <div className="flex justify-center mt-3 sm:mt-4">
          <img
            src={secureImage}
            alt={book?.title}
            className="h-30 sm:h-40 md:h-80 sm:ml-6 w-auto object-cover border border-gray-500 rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col mt-4 sm:mt-7 md:mt-8 sm:px-2 sm:ml-6 ">
          <h1 className=" text-center sm:text-start md:text-3xl font-bold text-sm text-shadow-lg ">
            {book.title}
          </h1>

          <div className="flex justify-center sm:justify-start mt-3 md:mt-6 ">
            <p className="font-bold text-xs md:text-lg mr-2">category :</p>
            <span className="font-semibold text-xs md:text-lg mr-2">
              {book.categories}
            </span>
          </div>

          <div className="flex justify-center sm:justify-start mt-1 md:mt-2 ">
            <p className="font-bold text-xs md:text-lg mr-2">author :</p>
            <span className=" text-xs md:text-lg">
              {book.authors
                ? book.authors.slice(0, 2).join(", ") +
                  (book.authors.length > 2 ? "..." : "")
                : "Unknown"}
            </span>
          </div>

          <div className="flex justify-center sm:justify-start md:mt-2  ">
            <p className="font-bold text-xs md:text-lg mr-2">year :</p>
            <span className="text-gray-500 text-xs md:text-lg">
              {book.publishedDate}
            </span>
          </div>
          {book.description && (
            <div className="overflow-y-auto px-2 sm:px-0 mt-5 md:mt-9 max-h-[200px] md:max-h-[400px]  ">
              <p className="font-bold text-xs md:text-lg">description :</p>
              <h3
                className={`text-gray-600 mt-1 text-[10px] md:text-lg ${
                  !showFull ? "line-clamp-2 " : ""
                }`}
              >
                {book.description}
              </h3>
              {book.description.length > 100 && (
                <button
                  onClick={() => setShowFull(!showFull)}
                  className="mb-5 text-black text-[10px] md:text-lg underline "
                >
                  {showFull ? "See less" : "See more"}
                </button>
              )}
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-0 h-5 w-5 md:h-10 md:w-10 right-0  text-black text-[20px] font-bold md:px-2 md:py-1 rounded-xl hover:text-red-700"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default BookModal;
