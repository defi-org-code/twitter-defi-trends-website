import JoinBtn from "./components/JoinBtn";
import MostActiveBtn from "./components/MostActiveBtn";
import InfluencersList from "./components/InfluencersList";

const InfluencersContainer = () => {
  return (
    <div className="influencers flex">
      <section className="influencers-bg"></section>
      <MostActiveBtn />
      <InfluencersList />
      <JoinBtn />
    </div>
  );
};

export default InfluencersContainer;
