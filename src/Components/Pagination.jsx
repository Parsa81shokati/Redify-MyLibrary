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
        className="border rounded-full hover:bg-black hover:text-white disabled:opacity-30 dark:bg-white"
        disabled={page === 1}
      >
        <GrPrevious />
      </button>
      <p
        onClick={() => setPage(1)}
        className={`cursor-pointer px-2 py-1 rounded-full ${
          page === 1
            ? "bg-black text-white font-bold dark:bg-white dark:text-blue-950 "
            : "text-gray-700 dark:text-gray-300"
        }`}
      >
        1
      </p>
      {page > 2 && <span className="dark:text-white">...</span>}

      {page > 1 && page < 10 && (
        <p
          className={`cursor-pointer px-3 py-1 rounded-full ${
            page !== 1 && page !== 10
              ? "bg-black text-white font-bold dark:bg-white dark:text-blue-950"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {page}
        </p>
      )}
      {page < 9 && <span className="dark:text-white">...</span>}

      <p
        className={`cursor-pointer px-3 py-1 rounded-full ${
          page === 10
            ? "bg-black text-white font-bold  dark:bg-white dark:text-blue-950"
            : "text-gray-700 dark:text-gray-300"
        }`}
        onClick={() => setPage(10)}
      >
        10
      </p>
      <button
        onClick={nextHandler}
        className="border rounded-full hover:bg-black hover:text-white disabled:opacity-20 dark:bg-white "
        disabled={page === 10}
      >
        <GrNext />
      </button>
    </div>
  );
}

export default Pagination;
