import React, { useContext, useEffect, useState } from "react";
import { categories } from "../Services/helper";
import fetchNewestBooks from "../Services/books";
import BookCard from "./NewestCard";
import { BookContext } from "../Services/BookContext";

function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useContext(BookContext);

  return (
    <div className="w-full flex justify-center ">
      <div className="flex flex-row flex-nowrap gap-0.5 sm:gap-1 md:gap-2 max-w-3xl md:max-w-5xl">
        {categories.map((cat) => (
          <div key={cat.id}>
            <button
              onClick={() => setSelectedCategory(cat.category)}
              className={`flex justify-center items-center w-19 sm:w-28 md:w-39 h-6 sm:h-10 md:h-13 text-[10px] sm:text-sm md:text-xl font-semibold rounded-xl sm:rounded-2xl md:rounded-3xl transition duration-200 ease-in hover:scale-103 ${
                selectedCategory === cat.category
                  ? "bg-black text-white shadow-md font-bold"
                  : "bg-white hover:border-2  hover:border-gray-500"
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
