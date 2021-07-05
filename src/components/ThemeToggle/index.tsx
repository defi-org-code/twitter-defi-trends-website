import Toggle from "react-toggle";

import "react-toggle/style.css"; // for ES6 modules

import React from "react";
import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const [darkMode, handleDarkMode] = useTheme();
  return (
    <Toggle
      icons={false}
      className="theme-toggle"
      checked={darkMode}
      onChange={handleDarkMode}
    />
  );
};

export default ThemeToggle;
