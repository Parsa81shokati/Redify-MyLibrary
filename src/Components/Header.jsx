import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

function Header() {
  return (
    <div className="w-full flex justify-between items-center py-4 sm:py-6 md:py-8">
      <div className="flex flex-col sm:flex-row items-start mt-1 sm:mt-5 mx-1 sm:mx-4 md:mx-16 ">
        <h1 className="text-xl sm:text-2xl md:text-5xl font-serif font-bold">
          Readify
        </h1>
        <p className="text-xs sm:text-sm md:text-lg font-serif font-bold">
          Your Personal Online Library
        </p>
      </div>

      <button
        onClick={() => setDark(!dark)}
        className="text-xl sm:text-2xl text-gray-800"
      >
        <IoSunny />
      </button>
    </div>
  );
}

export default Header;
