import React, { useContext } from "react";
import CookiePolicy from "./components/CookiePolicy";
import Home from "./screens/home/index";
import { ThemeContext } from "./providers/ThemeProvider";
import "./style/index.scss";

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "app dark-mode" : "app"}>
      <Home />
      <CookiePolicy />
    </div>
  );
};

export default App;
