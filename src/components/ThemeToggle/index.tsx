import { useContext } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import useAnalytics from "../../hooks/useAnalytics";

import { ThemeContext } from "../../providers/ThemeProvider";
import { THEMES } from "../../screens/home/types";

interface IProps {
  customClassName?: string;
}
const ThemeToggle = ({ customClassName }: IProps) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { tapOnThemeSelect } = useAnalytics();
  const className = customClassName
    ? `${customClassName} theme-toggle`
    : "theme-toggle";

  const themeSelect = () => {
    tapOnThemeSelect(isDarkMode ? THEMES.LIGHT : THEMES.DARK);
    toggleDarkMode();
  };
  return (
    <>
      <Toggle
        icons={false}
        className={className}
        checked={!!isDarkMode}
        onChange={themeSelect}
      />
    </>
  );
};

export default ThemeToggle;
