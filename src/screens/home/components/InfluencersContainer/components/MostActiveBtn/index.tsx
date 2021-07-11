import React from "react";
import images from "../../../../../../constans/images";

function MostActiveBtn() {
  return (
    <div className="influencers-most-active flex">
      <img src={images.coinsImg.img} alt={images.coinsImg.alt} />
      <p>Most active in the past hour</p>
    </div>
  );
}

export default MostActiveBtn;
