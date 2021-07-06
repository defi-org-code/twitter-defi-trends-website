import React, { useState } from "react";
import Tooltip from "../../../../../../components/Tooltip";
import images from "../../../../../../constans/images";
import Popup from "../../../../../../components/Popup";
import CustomPopup from "./CustomPopup";
const VarifiedUsersView = () => {
  const [isPopup, setIsPopup] = useState(false);
  const togglePopup = () => {
    setIsPopup((p) => !p);
  };

  return (
    <div className="view-selector-varified-users">
      <Popup close={togglePopup} show={isPopup} ContentCoponent={CustomPopup} />
      <Tooltip
        handleClick={togglePopup}
        image={images.questionMark.img}
        alt={images.questionMark.alt}
        content="Sort status explanation. lorem ipsum dolor sit amet consectetur adipiscing elit "
      />
    </div>
  );
};

export default VarifiedUsersView;
