import React from "react";
import CookiePolicy from "./components/CookiePolicy";
import Home from "./screens/home/index";
import "./style/index.scss";

const App = () => {
  return (
    <div className="App">
      <Home />
      <CookiePolicy />
    </div>
  );
};

export default App;
