import React from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
const ThemeToggle = () => {
  const handleClick = () => {
    document.body.classList.add("dark-mode");
  };
  return (
    <Toggle
      defaultChecked={false}
      icons={false}
      onChange={handleClick}
      className="theme-toggle"
    />
  );
};

export default ThemeToggle;
