import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Header() {
  return (
    <div className="fixed flex justify-between items-center py-2 md:py-3 px-2 md:px-6 w-full backdrop-blur-md bg-white/20 border-b border-white/30 z-50">
      <div className=" mt-1 sm:mt-1 mx-1 sm:mx-2 ">
        <h1 className=" text-xl sm:text-2xl  font-serif font-bold">Readify</h1>
        {/* <p className="text-xs sm:text-sm md:text-base font-serif font-bold">
          Your Personal Online Library
        </p> */}
      </div>
      <div className="flex-grow">
        <SearchBar />
      </div>
      <button
        onClick={() => setDark(!dark)}
        className="text-2xl sm:text-2xl text-gray-800 "
      >
        <IoSunny className="text-3xl" />
      </button>
    </div>
  );
}

export default Header;
