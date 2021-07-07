import React, { useContext } from "react";
import CookiePolicy from "./components/CookiePolicy";
import Home from "./screens/home/index";
import { ThemeContext } from "./providers/ThemeProvider";
import AppLoader from "./components/AppLoader";
import "./style/index.scss";

const App = () => {
  return (
    <div className="app">
      <AppLoader />
      <Home />
      <CookiePolicy />
    </div>
  );
};

export default App;
