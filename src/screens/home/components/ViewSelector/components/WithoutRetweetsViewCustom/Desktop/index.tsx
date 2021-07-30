import Tooltip from "../../../../../../../components/Tooltip";
import images from "../../../../../../../constans/images";
import React from "react";

const WithoutRetweetsViewCustom = () => {
  return (
    <div className="view-selector-custom view-selector-custom-desktop">
      <Tooltip
        content="Realtime tweets about DeFi by everyone on Twitter excluding annoying bots and retweets"
        className="view-selector-custom-btn"
        btnContent={
          <img src={images.questionMark.img} alt={images.questionMark.alt} />
        }
      />
    </div>
  );
};

export default WithoutRetweetsViewCustom;
