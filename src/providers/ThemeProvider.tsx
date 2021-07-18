import { createContext, useEffect } from "react";
import { DARK_MODE } from "../constans";
import useLocalStorage from "../hooks/useLocalStorage";
import useMobile from "../hooks/useMobile";
import useThemeColor from "../hooks/useThemeColor";

interface IState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobile: boolean;
}

const defaults: IState = {
  isDarkMode: false,
  toggleDarkMode: () => {},
  isMobile: false,
};

const ThemeContext = createContext<IState>(defaults);

interface IProps {
  children: JSX.Element;
}

const ThemeProvider = ({ children }: IProps) => {
  const [isMobile] = useMobile();
  const [isDarkMode, toggleDarkMode] = useThemeColor();

  const value = { isDarkMode, toggleDarkMode, isMobile };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
