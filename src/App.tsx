import CookiePolicy from "./components/CookiePolicy";
import Home from "./screens/home/index";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./style/index.scss";
const { Offline } = require("react-detect-offline");

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <CookiePolicy />
      <Footer />
      <Offline>Please check your internet connection</Offline>
    </div>
  );
};

export default App;
