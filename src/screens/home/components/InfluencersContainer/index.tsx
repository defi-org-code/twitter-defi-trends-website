import React, { useState, useEffect, useRef } from "react";
import dataGenerator from "../../../../services/data-generator";
import { IInfluencer } from "../../types";
import Influencer from "../Influencer";
import JoinImg from "../../../../assets/images/join.png";

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

const JoinBtn = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      className={
        hovered
          ? "influencers-join influencers-join-active "
          : "influencers-join"
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? <p>Join as an influencer</p> : <p>Join us</p>}
      <span className="flex">
        {hovered ? (
          <>
            <img src={JoinImg} alt="email" />
            <p className="influencers-join-link">
              <a href="mailto:Rotem@domain.com">Rotem@domain.com</a>
            </p>
          </>
        ) : (
          <img src={JoinImg} alt="email" />
        )}
      </span>
    </button>
  );
};

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
