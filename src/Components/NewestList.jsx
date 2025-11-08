import { useEffect, useState } from "react";

import fetchNewestBooks from "../Services/books";
import { categories } from "../Services/helper";
import NewestCard from "./NewestCard";
import { useKeenSlider } from "keen-slider/react";
import NewestCardSkeleton from "./NewestCardSkeleton";

function NewestList({ setSelectedBook }) {
  const [booksByCategory, setBooksByCategory] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      const results = {};
      for (let cat of categories) {
        results[cat.category] = await fetchNewestBooks(cat.category, 1, 3);
      }
      setBooksByCategory(results);
      setLoaded(true);
    };

    fetchAll();
  }, []);

  const [sliderRef, slider] = useKeenSlider(
    loaded
      ? {
          loop: true,
          slides: { perView: 5.5, spacing: 15 },
          breakpoints: {
            "(max-width: 508px)": {
              slides: { perView: 2.3 },
            },
            "(min-width: 509px) and (max-width: 700px)": {
              slides: { perView: 3 },
            },
            "(min-width: 700px) and (max-width: 1000px)": {
              slides: { perView: 4.2 },
            },
            "(min-width: 1000px)": {
              slides: { perView: 5.5 },
            },
          },
        }
      : null
  );

  const allBooks = categories.flatMap(
    (cat) => booksByCategory[cat.category] || []
  );

  return (
    <div className="relative rounded-2xl mx-3 mt-10 mb-10 px-4 md:px-15">
      <h1 className=" text-center text-sm sm:text-lg md:text-3xl font-sans ml-4 md:ml-8 my-3 md:my-8 font-bold text-blue-950 dark:text-gray-100 text-shadow-2xs ">
        Newest in Readify
      </h1>
      <div
        ref={loaded ? sliderRef : null}
        className={`mt-1 md:mt-2 border-2 border-blue-50 rounded-3xl keen-slider`}
      >
        {allBooks.length > 0
          ? allBooks.map((book) => (
              <div
                key={book.id}
                className="keen-slider__slide flex justify-center"
              >
                <NewestCard book={book.volumeInfo} onOpen={setSelectedBook} />
              </div>
            ))
          : Array(10)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex justify-center px-3 md:px-5">
                  <NewestCardSkeleton />
                </div>
              ))}
      </div>
    </div>
  );
}

export default NewestList;
