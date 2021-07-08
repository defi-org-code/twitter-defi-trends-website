import CookiePolicy from "./components/CookiePolicy";
import Home from "./screens/home/index";
import AppLoader from "./components/AppLoader";
import "./style/index.scss";

const App = () => {
  return (
    <AppLoader>
      <div className="app">
        <Home />
        <CookiePolicy />
      </div>
    </AppLoader>
  );
};

export default App;
