import Period from "./components/Period";
import ViewContainer from "./components/ViewContainer";
const { Online } = require("react-detect-offline");

const Home = () => {
  return (
    <Online>
      <div className="home">
        <Period />
        <ViewContainer />
      </div>
    </Online>
  );
};

export default Home;
