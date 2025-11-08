import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import SearchBar from "./SearchBar";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="fixed flex justify-between items-center py-2 md:py-3 px-2 md:px-6 w-full backdrop-blur-md bg-white/20 border-b border-white/30 z-50">
      <div className=" mt-1 sm:mt-1 mx-1 sm:mx-2 ">
        <h1 className=" text-xl sm:text-2xl dark:text-white font-serif font-bold">
          Readify
        </h1>
      </div>
      <div className="flex-grow">
        <SearchBar />
      </div>
      <ThemeToggle />{" "}
    </div>
  );
}

export default Header;
