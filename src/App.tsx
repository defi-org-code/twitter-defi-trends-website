import CookiePolicy from "./components/CookiePolicy";
import Home from "./screens/home/index";
import Navbar from "./components/Navbar";
import "./style/index.scss";
import { Route, Switch } from "react-router-dom";
import { routes } from "./constans";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsOfUse from "./screens/TermsOfUSe";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <CookiePolicy />
      <Switch>
        <Route path={routes.privacyPolicy} component={PrivacyPolicy} />
        <Route path={routes.termsOfUse} component={TermsOfUse} />
        <Route path={routes.root} component={Home} />
      </Switch>
    </div>
  );
};

export default App;
