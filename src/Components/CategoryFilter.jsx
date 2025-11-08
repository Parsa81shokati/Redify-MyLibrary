import React, { useContext, useEffect, useState } from "react";
import { categories } from "../Services/helper";
import fetchNewestBooks from "../Services/books";
import BookCard from "./NewestCard";
import { BookContext } from "../Services/BookContext";

function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useContext(BookContext);

  return (
    <div className=" flex flex-col justify-center items-center  ">
      <div>
        <p className="text-center sm:text-xl md:text-3xl text-sm font-bold text-blue-950 dark:text-gray-100 mb-3 md:mb-12">
          Choose your favorite category
        </p>
      </div>
      <div className="flex flex-row flex-nowrap gap-0.5 sm:gap-1 md:gap-2 max-w-3xl md:max-w-5xl">
        {categories.map((cat) => (
          <div key={cat.id}>
            <button
              onClick={() => setSelectedCategory(cat.category)}
              className={`flex justify-center items-center w-19 sm:w-28 md:w-32 h-6 sm:h-9 lg:h-10 text-[10px] sm:text-sm md:text-base font-semibold rounded-xl sm:rounded-2xl md:rounded-3xl transition duration-200 ease-in hover:scale-103 ${
                selectedCategory === cat.category
                  ? "bg-black text-white shadow-md font-bold dark:bg-blue-800"
                  : "bg-white hover:border-2  hover:border-blue-400 "
              }`}
            >
              {cat.category}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
