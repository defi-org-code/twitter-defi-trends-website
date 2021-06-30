import ListsContainer from "./components/ListsContainer";
import Header from "./components/Header";
import SelectionContainer from "./components/SelectionContainer";
const Home = () => {
  return (
    <div className="home">
      <div className="home-grid">
        <Header />
        <SelectionContainer />
        <ListsContainer />
      </div>
    </div>
  );
};

export default Home;
