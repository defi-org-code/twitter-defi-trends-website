import Header from "./components/Header";
import Period from "./components/Period";
import TweetsContainer from "./components/TweetsContainer";
const { Online } = require("react-detect-offline");

const Home = () => {
  return (
    <div className="home">
      <div className="home-grid">
        <Header />
        <Online>
          <Period />
          <TweetsContainer />
        </Online>
      </div>
    </div>
  );
};

export default Home;
