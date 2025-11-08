import React, { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const dark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDark(dark);

    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const toggle = () => {
    const next = !isDark;
    setIsDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <button
      onClick={toggle}
      className="text-2xl sm:text-2xl hover:scale-120  transition cursor-pointer "
    >
      {isDark ? (
        <IoSunny className="text-3xl dark:text-white" />
      ) : (
        <IoMdMoon className="text-3xl" />
      )}
    </button>
  );
}

export default ThemeToggle;
