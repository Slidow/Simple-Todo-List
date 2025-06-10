import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function ThemeToggle({ theme, setTheme }) {

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }

  return (
    <div 
      className="h-[34px] bg-accent text-white w-[34px] rounded-sm flex items-center justify-center cursor-pointer"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FiMoon size={23} /> : theme === "dark" ? <FiSun size={23} /> : ""}
    </div>
  )
}

export default ThemeToggle;