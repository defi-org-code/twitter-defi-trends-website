import { useContext } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules

import { ThemeContext } from "../../providers/ThemeProvider";

interface IProps {
  customClassName?: string;
}
const ThemeToggle = ({ customClassName }: IProps) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const className = customClassName
    ? `${customClassName} theme-toggle`
    : "theme-toggle";
  return (
    <>
      <Toggle
        icons={false}
        className={className}
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
    </>
  );
};

export default ThemeToggle;
