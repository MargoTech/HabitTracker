import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg text-lg 
        bg-gray-300 dark:bg-gray-700 text-black dark:text-white
        hover:bg-gray-400 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
