import React, { useContext } from "react";
import { BookContext } from "../Services/BookContext";
import { GrPrevious, GrNext } from "react-icons/gr";

function Pagination() {
  const { page, setPage } = useContext(BookContext);

  const previosHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };
  return (
    <div className="flex flex-row gap-2 sm:gap-3 md:gap-5 justify-center my-15">
      <button
        onClick={previosHandler}
        className="border rounded-full hover:bg-black hover:text-white disabled:opacity-20 "
        disabled={page === 1}
      >
        <GrPrevious />
      </button>
      <p
        onClick={() => setPage(1)}
        className={`cursor-pointer px-2 py-1 rounded-full ${
          page === 1 ? "bg-black text-white font-bold" : "text-gray-700"
        }`}
      >
        1
      </p>
      {page > 2 && <span>...</span>}

      {page > 1 && page < 10 && (
        <p
          className={`cursor-pointer px-3 py-1 rounded-full ${
            page !== 1 && page !== 10
              ? "bg-black text-white font-bold"
              : "text-gray-700"
          }`}
        >
          {page}
        </p>
      )}
      {page < 9 && <span>...</span>}

      <p
        className={`cursor-pointer px-3 py-1 rounded-full ${
          page === 10 ? "bg-black text-white font-bold" : "text-gray-700"
        }`}
        onClick={() => setPage(10)}
      >
        10
      </p>
      <button
        onClick={nextHandler}
        className="border rounded-full hover:bg-black hover:text-white disabled:opacity-20 "
        disabled={page === 10}
      >
        <GrNext />
      </button>
    </div>
  );
}

export default Pagination;
