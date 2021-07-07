import { createContext, useEffect } from "react";
import { DARK_MODE } from "../constans";
import useLocalStorage from "../hooks/useLocalStorage";

interface IState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const defaults: IState = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

const ThemeContext = createContext<IState>(defaults);

interface IProps {
  children: JSX.Element;
}

const ThemeProvider = ({ children }: IProps) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(DARK_MODE, "");
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
