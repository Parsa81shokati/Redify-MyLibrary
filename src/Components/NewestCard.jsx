import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import truncateText from "../Services/helper";

function NewestCard({ book, onOpen }) {
  const secureImage = book?.imageLinks?.thumbnail
    ? book.imageLinks.thumbnail.replace("http://", "https://")
    : "/no-cover-avalible.png";

  return (
    <div className=" relative flex flex-col items-center w-28 sm:w-35 lg:w-40 h-50 sm:h-60 lg:h-75 border border-none rounded-2xl hover:shadow-md  transition [box-shadow:0_-4px_6px_rgba(0,0,0,0.15)] bg-gradient-to-r from-blue-100 to-blue-50 mt-5 md:mt-8 mb-4 md:mb-7 ">
      <div className="flex justify-center overflow-hidden w-22 sm:w-25 lg:w-35 h-30 sm:h-40 lg:h-45 mt-3 md:mt-4 ">
        <img
          src={secureImage}
          alt={book?.title}
          className=" object-cover border border-gray-400 "
        />
      </div>

      <div className="flex flex-col mt-2.5 lg:mt-5">
        <div className="flex flex-col items-center px-4 sm:px-5 lg:px-6">
          <h1 className="font-semibold text-[9px] lg:text-xs/3 line-clamp-1 text-center text-shadow-sm ">
            {book.title}
          </h1>

          <div className="flex flex-row gap-0.25 sm:gap-0.5 md:gap-1 items-center min-w-0 mt-1 md:mt-3">
            <p className="text-[8px] sm:text-[8px] lg:text-[10px] text-gray-700 flex-shrink-0">
              author :
            </p>
            <h3 className="text-[8px] sm:text-[8px] lg:text-[10px] text-gray-600 line-clamp-1 ">
              {book.authors && book.authors.length > 0
                ? truncateText(book.authors, 2)
                : "Unknown"}
            </h3>
          </div>

          <div className="flex flex-row mt-0 md:mt-1 ">
            <p className="text-[8px] lg:text-[11px] text-gray-700 ">year : </p>
            <h3 className="text-[7px] lg:text-[10px] text-gray-600 mt-0.25 md:mt-0.5">
              {book.publishedDate ? book.publishedDate.slice(0, 4) : "-"}
            </h3>
          </div>
        </div>

        <div className="absolute flex justify-center items-center w-10 md:w-13 lg:w-11 h-10 sm:h-10 md:h-13 lg:h-11 bg-[#EDFBFF] -bottom-3 md:-bottom-4 -right-4 md:-right-3 rounded-tl-xl ">
          <button
            onClick={() => onOpen(book)}
            className="flex justify-center items-center bg-blue-100 border-blue-100 w-7 md:w-9 lg:w-8 h-7 md:h-9 lg:h-8 border border-none rounded-lg cursor-pointer hover:scale-108 transition text-base md:text-lg "
          >
            <CgDetailsMore />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewestCard;
