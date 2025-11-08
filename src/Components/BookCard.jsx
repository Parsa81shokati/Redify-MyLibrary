import React, { useState } from "react";
import BookModal from "./BookModal";
import { CgDetailsMore } from "react-icons/cg";
import truncateText from "../Services/helper";

function BookCard({ book, onOpen }) {
  const secureImage = book?.imageLinks?.thumbnail
    ? book.imageLinks.thumbnail.replace("http://", "https://")
    : "/no-cover-avalible.png";

  return (
    <div className=" relative flex flex-row w-65 sm:w-65 lg:w-75 h-29 sm:h-34 lg:h-48 bg-white border border-none rounded-xl sm:rounded-2xl hover:shadow-md  transition [box-shadow:0_-4px_6px_rgba(0,0,0,0.15)] ">
      <div className=" flex flex-shrink-0 justify-center  overflow-hidden ">
        <img
          src={secureImage}
          alt={book?.title}
          className=" object-cover w-13 sm:w-17 lg:w-26 h-21 sm:h-26 lg:h-40 border border-gray-500 ml-5 mt-4  lg:ml-4 lg:mt-4"
        />
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 mt-7 sm:mt-7 lg:mt-10">
        <div className=" flex flex-col items-start px-4 lg:px-3">
          <h1 className="font-bold text-[12px] sm:text-sm lg:text-base/6 line-clamp-2 text-shadow-sm  ">
            {book.title}
          </h1>

          <div className="flex flex-row gap-0.25 sm:gap-0.5 md:gap-1 items-center min-w-0 mt-2 lg:mt-4">
            <p className="text-[9px] sm:text-[12px] md:text-xs lg:text-xs font-semibold flex-shrink-0">
              author :
            </p>
            <h3 className="text-[8px] sm:text-[11px] md:text-xs lg:text-xs line-clamp-1 ">
              {book.authors && book.authors.length > 0
                ? truncateText(book.authors, 2)
                : "Unknown"}
            </h3>
          </div>

          <div className=" flex flex-row mt-1 ">
            <p className="text-[9px] sm:text-[12px] md:text-sx lg:text-xs font-semibold">
              year :
            </p>
            <h3 className="text-[8px] sm:text-[10px] md:text-sx lg:text-xs text-gray-500 ">
              {book.publishedDate ? book.publishedDate.slice(0, 4) : "-"}
            </h3>
          </div>
        </div>

        <div className="  absolute flex justify-center items-center w-10 md:w-13 lg:w-14 h-10 sm:h-10 md:h-13 lg:h-14 bg-[#c7e1ff] dark:bg-[#071d34] transition-colors duration-500 -bottom-3 -right-3 rounded-tl-lg ">
          <button
            onClick={() => onOpen(book)}
            className="flex justify-center items-center bg-white w-7 md:w-9 lg:w-10 h-7 md:h-9 lg:h-10 border border-none rounded-lg cursor-pointer hover:scale-108  transition text-base md:text-lg lg:text-2xl"
          >
            <CgDetailsMore />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
