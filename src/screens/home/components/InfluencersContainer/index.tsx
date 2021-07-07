import React, { useEffect, useRef } from "react";
import dataGenerator from "../../../../services/data-generator";
import { IInfluencer } from "../../types";
import Influencer from "./components/Influencer";
import JoinBtn from "./JoinBtn";
import MostActive from "./MostActive";
interface IProps {
  isActive: boolean;
}
const handleIsActive = (containerRef: any) => {
  if (!containerRef.current) return;
  containerRef.current.style.maxHeight = "65px";
};
const handleIsInActive = (containerRef: any) => {
  if (!containerRef.current) return;
  containerRef.current.style.maxHeight = "0px";
};
const data = dataGenerator.createInfluencers(20);

const InfluencersContainer = ({ isActive }: IProps) => {
  const containerRef: any = useRef(null);
  useEffect(() => {
    if (isActive) {
      handleIsActive(containerRef);
    } else {
      handleIsInActive(containerRef);
    }
  }, [isActive]);

  return (
    <div ref={containerRef} className="influencers flex">
      <section className="influencers-bg"></section>
      <MostActive />
      <div className="influencers-flex flex">
        {data.map((influencer: IInfluencer) => {
          return <Influencer key={influencer.name} influencer={influencer} />;
        })}
      </div>
      <JoinBtn />
    </div>
  );
};

export default InfluencersContainer;
