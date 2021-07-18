/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { DARK_MODE } from "../constans";
import useLocalStorage from "./useLocalStorage";

const useThemeColor = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(DARK_MODE, undefined);
  const handleUsersOsTheme = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode === undefined) {
      handleUsersOsTheme();
      return;
    }
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
};

export default useThemeColor;
