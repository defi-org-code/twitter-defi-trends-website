import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useTheme = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("dark-mode", "");
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      return document.body.classList.add("dark-mode");
    }
    document.body.classList.remove("dark-mode");
  }, [isDarkMode]);

  return [isDarkMode, handleDarkMode];
};

export default useTheme;
