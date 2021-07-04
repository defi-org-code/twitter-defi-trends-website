import { useState } from "react";
import JoinImg from "../../../../assets/images/tweet.png";

const JoinBtn = () => {
  return (
    <button className="influencers-join">
      <p>Want to be mentioned here?</p>
      <img src={JoinImg} alt="email" />
    </button>
  );
};

export default JoinBtn;
