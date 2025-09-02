import { useEffect, useState } from "react";

import fetchNewestBooks from "../Services/books";
import { categories } from "../Services/helper";
import NewestCard from "./NewestCard";

function NewestList({ setSelectedBook }) {
  const [booksByCategory, setBooksByCategory] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      const results = {};
      for (let cat of categories) {
        results[cat.category] = await fetchNewestBooks(cat.category, 1, 3);
      }
      setBooksByCategory(results);
    };

    fetchAll();
  }, []);

  return (
    <div className="relative bg-white rounded-2xl mx-3 md:mx-29 mt-10 mb-10">
      <h1 className=" absolute -top-7 left-2 sm:-top-9 md:-top-13 md:left-2  text-sm sm:text-lg md:text-3xl font-sans  font-semibold ">
        Newest in Readify
      </h1>
      <div className="flex flex-wrap justify-around mt-3 md:mt-3 py-2 sm:py-3 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 md:gap-x-12 gap-y-4 sm:gap-y-6 md:gap-y-11">
          {categories.map((cat) =>
            booksByCategory[cat.category]?.map((book) => (
              <NewestCard
                key={book.id}
                book={book.volumeInfo}
                onOpen={setSelectedBook}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default NewestList;
