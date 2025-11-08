import React, { useContext, useState } from "react";
import CategoryFilter from "./CategoryFilter";

import NewestList from "./NewestList";
import BookCard from "./BookCard";
import { BookContext } from "../Services/BookContext";
import { RiseLoader } from "react-spinners";
import Pagination from "./Pagination";
import BookModal from "./BookModal";

function BookList() {
  const [selectedBook, setSelectedBook] = useState(null);

  const { selectedCategory, books, searchQuery, searchbooks } =
    useContext(BookContext);

  const hasSearch = searchQuery && searchQuery.text.trim() !== "";

  return (
    <div className="w-full flex flex-col gap-7 sm:gap-10 md:gap-18 my-2 sm:my-3 md:my-8 px-2 ">
      <NewestList
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
      <div className="mt-8 md:mt-15">
        <CategoryFilter />
      </div>

      <div
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-x-1 sm:gap-x-2 
          gap-y-3 sm:gap-y-4 md:gap-y-10
          mt-1 sm:mt-2.5
          p-5 md:p-10
          mx-7 md:mx-10
          min-h-50
          justify-items-center border-2 border-white rounded-2xl"
      >
        {hasSearch ? (
          searchbooks.length > 0 ? (
            searchbooks.map((book) => (
              <BookCard
                key={book.id}
                book={book.volumeInfo}
                onOpen={setSelectedBook}
              />
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center py-8 sm:py-12">
              <RiseLoader />
            </div>
          )
        ) : selectedCategory ? (
          books.length > 0 ? (
            books.map((book) => (
              <BookCard
                key={book.id}
                book={book.volumeInfo}
                onOpen={setSelectedBook}
              />
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center py-8 sm:py-12 drk:text-white">
              <RiseLoader />
            </div>
          )
        ) : (
          <div className="flex justify-center items-center text-gray-600 dark:text-gray-200">
            <p className=" text-[10px] md:text-lg ">!No category selected.</p>
          </div>
        )}
      </div>

      {(hasSearch || selectedCategory) && (
        <div className="flex justify-center mt-4 sm:mt-6">
          <Pagination />
        </div>
      )}

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default BookList;
