import React, { useContext } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules

import { ThemeContext } from "../../providers/ThemeProvider";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Toggle
      icons={false}
      className="theme-toggle"
      checked={isDarkMode}
      onChange={toggleDarkMode}
    />
  );
};

export default ThemeToggle;
