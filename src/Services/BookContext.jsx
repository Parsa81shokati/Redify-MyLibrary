import React, { createContext, useEffect, useState } from "react";
import fetchNewestBooks, { fetchBooks } from "./books";

export const BookContext = createContext();

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [searchbooks, setSearchBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState({ text: "", type: "title" });
  const [page, setPage] = useState(1);

  useEffect(() => {
    setBooks([]);
    async function fetchBook() {
      const res = await fetchNewestBooks(selectedCategory, page, 9);
      setBooks(res);
    }

    fetchBook();
  }, [selectedCategory, page]);

  useEffect(() => {
    if (searchQuery.text.trim() === "") {
      setSearchBooks([]);
      return;
    }
    const handler = setTimeout(async () => {
      const results = await fetchBooks(
        searchQuery.text,
        searchQuery.type,
        page,
        9
      );
      setSearchBooks(results);
    }, 400);

    return () => clearTimeout(handler);
  }, [searchQuery, page]);

  return (
    <div>
      <BookContext.Provider
        value={{
          books,
          selectedCategory,
          setBooks,
          setSelectedCategory,
          setSearchQuery,
          setSearchBooks,
          searchbooks,
          searchQuery,
          setPage,
          page,
        }}
      >
        {children}
      </BookContext.Provider>
    </div>
  );
}

export default BookProvider;
