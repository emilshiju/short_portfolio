"use client"

import { useState, useEffect } from "react";

import { useTheme } from "./toggle";

const Header = () => {
  

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full p-4 flex justify-end text-white">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          // checked={theme === "dark"}
          className="sr-only peer"
          onChange={toggleTheme}
        />
        <div className="relative w-11 h-6  peer-focus:outline-none rounded-full peer bg-black dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white dark:peer-checked:bg-white"></div>
      </label>
    </header>
  );
};

export default Header;