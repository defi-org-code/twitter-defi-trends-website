import JoinBtn from "./components/JoinBtn";
import MostActiveBtn from "./components/MostActiveBtn";
import InfluencersList from "./components/InfluencersList";
import { useEffect, useRef } from "react";

interface IProps {
  hideView: boolean;
}

const InfluencersContainer = ({ hideView }: IProps) => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (hideView && container && container.current) {
      container.current.style.opacity = "0";
    }
  }, [hideView]);
  return (
    <div className="influencers flex" ref={container}>
      <section className="influencers-bg"></section>
      <MostActiveBtn />
      <InfluencersList />
      <JoinBtn />
    </div>
  );
};

export default InfluencersContainer;
