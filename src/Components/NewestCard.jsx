import React, { useState } from "react";
import BookModal from "./BookModal";
import { FaBook } from "react-icons/fa";
import truncateText from "../Services/helper";

function NewestCard({ book, onOpen }) {
  const secureImage = book?.imageLinks?.thumbnail
    ? book.imageLinks.thumbnail.replace("http://", "https://")
    : "/no-cover-avalible.png";

  return (
    <div className=" relative flex flex-row w-65 sm:w-72 lg:w-110 h-29 sm:h-36 lg:h-53 border border-none rounded-2xl hover:shadow-md  transition [box-shadow:0_-4px_6px_rgba(0,0,0,0.15)]  bg-gradient-to-r from-blue-100 to-blue-50   ">
      <div className="  flex justify-center  overflow-hidden">
        <img
          src={secureImage}
          alt={book?.title}
          className=" object-cover w-13 sm:w-17 lg:w-26 h-21 sm:h-26 lg:h-40 border border-gray-400 ml-5 mt-4 sm:ml-7 sm:mt-5 lg:ml-9 lg:mt-6"
        />
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 mt-7 sm:mt-7 lg:mt-10">
        <div className="flex flex-col items-start px-4 sm:px-5 lg:px-6">
          <h1 className="font-bold text-[12px] sm:text-sm md:text-base lg:text-2xl/7 line-clamp-2 text-shadow-sm ">
            {book.title}
          </h1>

          <div className="flex flex-row gap-0.25 sm:gap-0.5 md:gap-1 items-center min-w-0 mt-2">
            <p className="text-[9px] sm:text-[12px] md:text-xs lg:text-lg font-semibold flex-shrink-0">
              author :
            </p>
            <h3 className="text-[8px] sm:text-[11px] md:text-xs lg:text-lg line-clamp-1 ">
              {book.authors && book.authors.length > 0
                ? truncateText(book.authors, 2)
                : "Unknown"}
            </h3>
          </div>

          <div className="flex flex-row  ">
            <p className="text-[9px] sm:text-[12px] md:text-sx lg:text-lg font-semibold">
              {" "}
              year :{" "}
            </p>
            <h3 className="text-[8px] sm:text-[10px] md:text-sx lg:text-base text-gray-500 mt-0.5">
              {book.publishedDate ? book.publishedDate.slice(0, 4) : "-"}
            </h3>
          </div>
        </div>

        <div className="absolute flex justify-center items-center w-10  md:w-13 lg:w-14 h-10 sm:h-10 md:h-13 lg:h-14 bg-white -bottom-3 -right-3 rounded-tl-xl ">
          <button
            onClick={() => onOpen(book)}
            className="flex justify-center items-center bg-blue-50 border-blue-100 w-7 md:w-9 lg:w-10 h-7 md:h-9 lg:h-10 border border-none rounded-lg cursor-pointer hover:scale-108  transition text-base md:text-lg lg:text-2xl"
          >
            <FaBook />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewestCard;
