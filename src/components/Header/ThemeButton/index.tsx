'use client'

import { useState, useEffect } from "react";
import IconButton from "components/IconButton";

export const ThemeButton: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <IconButton
      src={theme === 'light' ? require('react-icons/fa').FaMoon : require('react-icons/fa').FaSun}
      size={20}
      className="text-black hover:cursor-pointer"
      onClick={handleThemeChange}
    />
  )
}