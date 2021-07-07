import React, { useState } from "react";
import Tooltip from "../../../../../../components/Tooltip";
import images from "../../../../../../constans/images";
import Popup from "../../../../../../components/Popup";
import CustomPopup from "./CustomPopup";
const VarifiedUsersViewCustom = () => {
  const [isPopup, setIsPopup] = useState(false);
  const togglePopup = () => {
    setIsPopup((p) => !p);
  };

  return (
    <div className="view-selector-custom">
      <Popup close={togglePopup} show={isPopup} ContentCoponent={CustomPopup} />
      <button onClick={togglePopup} className="view-selector-custom-btn">
        <img src={images.questionMark.img} alt={images.questionMark.alt} />
      </button>
      <Tooltip content="Only tweets from a verified list of user" />
    </div>
  );
};

export default VarifiedUsersViewCustom;