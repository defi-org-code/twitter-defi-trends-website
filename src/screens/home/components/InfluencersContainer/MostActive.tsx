import React from "react";
import CoinsImg from "../../../../assets/images/most-active.png";
const MostActive = () => {
  return (
    <div className="influencers-most-active flex">
      <img src={CoinsImg} alt="coins" />
      <p>Most active in the past hour</p>
    </div>
  );
};

export default MostActive;
