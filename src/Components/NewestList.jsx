import { useEffect, useState } from "react";

import fetchNewestBooks from "../Services/books";
import { categories } from "../Services/helper";
import NewestCard from "./NewestCard";
import { useKeenSlider } from "keen-slider/react";

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
            "(max-width: 768px)": {
              slides: { perView: 2.3 },
            },
            "(min-width: 769px)": {
              slides: { perView: 5.5 },
            },
          },
        }
      : null
  );

  return (
    <div className="relative bg-[#EDFBFF] rounded-2xl mx-3 mt-10 mb-10">
      <h1 className=" text-sm sm:text-lg md:text-3xl font-sans ml-4 md:ml-8 mt-3 md:mt-6 font-bold text-blue-950 text-shadow-2xs ">
        Newest in Readify
      </h1>
      <div ref={sliderRef} className=" keen-slider mt-1 md:mt-3 ">
        {categories.map((cat) =>
          booksByCategory[cat.category]?.map((book) => (
            <div
              key={book.id}
              className="keen-slider__slide flex justify-center"
            >
              <NewestCard book={book.volumeInfo} onOpen={setSelectedBook} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NewestList;
