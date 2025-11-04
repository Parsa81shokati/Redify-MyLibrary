import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // بررسی تم ذخیره شده در localStorage
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setDark(savedTheme === "dark");

      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (systemPrefersDark) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = (newDark) => {
    setDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");

    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div>
      <ThemeContext.Provider value={{ dark, setDark: toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider;
