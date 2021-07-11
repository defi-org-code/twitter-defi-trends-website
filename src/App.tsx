import CookiePolicy from "./components/CookiePolicy";
import Home from "./screens/home/index";
import AppLoader from "./components/AppLoader";
import Footer from "./components/Footer";
import "./style/index.scss";
const { Offline } = require("react-detect-offline");

const App = () => {
  return (
    <AppLoader>
      <div className="app">
        <Home />
        <CookiePolicy />
        <Footer />
        <Offline>Please check your internet connection</Offline>
      </div>
    </AppLoader>
  );
};

export default App;
