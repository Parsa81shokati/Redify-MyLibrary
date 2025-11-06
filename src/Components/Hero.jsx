import React from "react";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-around items-center gap-15 md:gap-30 px-5 md:px-30 ">
      <img src="./book.png" className="w-60 md:w-100 h-60 md:h-100 " />
      <div className="flex flex-col px-10 ">
        <h3 className="text-blue-950 text-3xl md:text-5xl/15 font-bold font-serif text-center md:text-left">
          The books you've been looking for are right here.
        </h3>
        <p className=" text-gray-600 text-xs md:text-sm mt-8 md:mt-12 text-center md:text-left ">
          Search, explore, and discover the latest books with ease on Readify.
          Get quick access to fresh releases, detailed book insights, and
          everything you need to choose your next great read.
        </p>
      </div>
    </div>
  );
}

export default Hero;
