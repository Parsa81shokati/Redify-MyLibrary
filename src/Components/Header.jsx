import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

function Header() {
  return (
    <div className="w-full flex justify-between items-center py-4 sm:py-4 md:py-5">
      <div className="flex flex-col sm:flex-row items-start mt-1 sm:mt-3 mx-1 sm:mx-4 ">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold">
          Readify
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-serif font-bold">
          Your Personal Online Library
        </p>
      </div>

      <button
        onClick={() => setDark(!dark)}
        className="text-2xl sm:text-2xl text-gray-800"
      >
        <IoSunny className="text-3xl" />
      </button>
    </div>
  );
}

export default Header;
