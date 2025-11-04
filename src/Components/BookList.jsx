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

  console.log(searchbooks);
  const hasSearch = searchQuery && searchQuery.text.trim() !== "";
  console.log(hasSearch);

  return (
    <div className="w-full flex flex-col gap-7 sm:gap-10 md:gap-18 mt-2 sm:mt-3 md:mt-8 px-2 ">
      <div className="">
        <p className="text-center sm:text-xl md:text-2xl text-sm font-bold text-blue-950 mt-3 md:mt-0 mb-3 md:mb-5">
          Choose your favorite category
        </p>
        <CategoryFilter />
      </div>

      {!hasSearch && !selectedCategory ? (
        <NewestList
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
      ) : (
        <div>
          <div
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-x-1 sm:gap-x-2 md:gap-x-2 
          gap-y-3 sm:gap-y-4 md:gap-y-10
          mt-1 sm:mt-2.5 md:mt-4
          md:px-10
          justify-items-center"
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
                <div className="col-span-full flex justify-center items-center py-8 sm:py-12">
                  <RiseLoader />
                </div>
              )
            ) : null}
          </div>
        </div>
      )}
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
