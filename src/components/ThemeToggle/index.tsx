import { useContext } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"; // for ES6 modules
import useAnalytics from "../../hooks/useAnalytics";

import { ThemeContext } from "../../providers/ThemeProvider";
import { THEMES } from "../../screens/home/types";
import { ANALYTICS_EVENTS } from "../../services/analytics/types";

interface IProps {
  customClassName?: string;
}

const ThemeToggle = ({ customClassName }: IProps) => {
  const className = customClassName
    ? `${customClassName} theme-toggle`
    : "theme-toggle";
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const { sendEventAndRunAction } = useAnalytics();

  return (
    <>
      <Toggle
        icons={false}
        className={className}
        checked={!!isDarkMode}
        onChange={sendEventAndRunAction.bind(
          null,
          ANALYTICS_EVENTS.THEME_SELECT,
          isDarkMode ? THEMES.LIGHT : THEMES.DARK,
          toggleDarkMode
        )}
      />
    </>
  );
};

export default ThemeToggle;
