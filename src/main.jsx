import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "tailwindcss";
import App from "./App.jsx";
import ThemeProvider from "./Services/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
