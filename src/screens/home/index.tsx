import Header from "./components/Header";
import TweetsContainer from "./components/TweetsContainer";
const Home = () => {
  return (
    <div className="home">
      <div className="home-grid">
        <Header />
        <TweetsContainer />
      </div>
    </div>
  );
};

export default Home;
