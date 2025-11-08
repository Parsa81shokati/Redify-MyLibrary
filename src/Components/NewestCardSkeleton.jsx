import React from "react";

function NewestCardSkeleton() {
  return (
    <div className=" relative flex flex-col items-center w-28 sm:w-35 lg:w-40 h-50 sm:h-60 lg:h-70 border border-none rounded-2xl hover:shadow-md bg-gray-50 mt-5 md:mt-8 mb-4 md:mb-7 animate-pulse">
      <div className="flex justify-center w-22 sm:w-25 lg:w-35 h-28 sm:h-40 bg-gray-200 mt-3 md:mt-4 rounded-lg "></div>

      <div className="flex flex-col mt-2 lg:mt-5">
        <div className="flex flex-col items-center px-4 sm:px-5 lg:px-6">
          <div className="bg-gray-200 w-15 sm:w-20 h-2 sm:h-3 rounded-lg"></div>

          <div className="bg-gray-200 w-15 sm:w-10 h-1 sm:h-2 rounded-lg mt-1 md:mt-3"></div>

          <div className="bg-gray-200 w-15 sm:w-10 h-1 sm:h-2 rounded-lg mt-1 md:mt-1"></div>
        </div>

        <div className="absolute flex justify-center items-center w-10 md:w-13 lg:w-11 h-10 sm:h-10 md:h-13 lg:h-11 bg-[#c7e1ff] dark:bg-[#071d34] -bottom-3 md:-bottom-4 -right-4 md:-right-3 rounded-tl-xl ">
          <div className="bg-blue-50 border-blue-100 w-7 md:w-9 lg:w-8 h-7 md:h-9 lg:h-8 border border-none rounded-lg  "></div>
        </div>
      </div>
    </div>
  );
}

export default NewestCardSkeleton;
