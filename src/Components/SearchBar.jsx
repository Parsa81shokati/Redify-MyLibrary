import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BookContext } from "../Services/BookContext";

function SearchBar() {
  const [searchText, SetsearchText] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [suggestions, setSuggestions] = useState([]);

  const { setSearchQuery, searchbooks, searchQuery } = useContext(BookContext);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery({ text: searchText, type: searchType });
      setSuggestions(searchbooks.slice(0, 5));
    }, 400);

    return () => clearTimeout(handler);
  }, [searchText, searchType]);

  const handleExactSearch = () => {
    setSuggestions([]);
    setSearchQuery({ text: searchText, type: searchType });
  };

  const handleSelect = (book) => {
    SetsearchText(book.volumeInfo.title);
    setSuggestions([]);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-center" ref={wrapperRef}>
      <div className="flex flex-row justify-center items-center w-full flex-1 max-w-[400px] gap-1 sm:gap-2 ">
        <select
          className="w-15 sm:w-20 h-6 sm:h-8 text-center border-none rounded-full bg-[#EDFBFF] text-gray-700 text-[8px] sm:text-[11px] px-1 sm:px-2 hover:scale-105 cursor-pointer "
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title" className="text-left">
            By Title
          </option>
          <option value="author" className="text-left">
            By Author
          </option>
        </select>
        <div className="relative ">
          <input
            className=" min-w-[150px] sm:min-w-[400px] h-6 sm:h-8 rounded-full border border-gray-200 bg-[#EDFBFF] pl-3 sm:pl-5 text-[9px] sm:text-[12px] text-lef hover:scale-101"
            type="text"
            placeholder="search here"
            value={searchText}
            onChange={(e) => SetsearchText(e.target.value)}
          />
          {suggestions.length > 0 && (
            <div className="absolute w-full bg-white shadow-lg rounded-xl border border-gray-200 z-50">
              <div
                onClick={handleExactSearch}
                className="px-2 sm:p-3 hover:bg-gray-100 cursor-pointer font-semibold"
              >
                <span className="text-[9px] sm:text-xs ">{searchText}</span>
              </div>

              {suggestions.map((book) => (
                <div
                  key={book.id}
                  onClick={() => handleSelect(book)}
                  className="px-2 py-1 sm:p-3 hover:bg-gray-100 cursor-pointer flex flex-col"
                >
                  <p className="text-[8px] sm:text-xs font-semibold">
                    {book.volumeInfo.title}
                  </p>
                  <p className="text-[7px] sm:text-xs text-gray-500">
                    {book.volumeInfo.authors?.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={handleExactSearch}>
          <IoIosSearch className="text-sm sm:text-xl text-black dark:text-white w-6 h-6  sm:w-8 sm:h-8 hover:scale-110 cursor-pointer " />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
