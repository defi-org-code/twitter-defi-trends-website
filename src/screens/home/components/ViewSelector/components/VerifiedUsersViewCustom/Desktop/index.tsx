import { useState } from "react";
import Tooltip from "../../../../../../../components/Tooltip";
import images from "../../../../../../../constans/images";
import Popup from "../../../../../../../components/Popup";
import VerifiedUsersPopup from "../../../../Popups/VerifiedUsersPopup";
const VerifiedUsersViewCustom = () => {
  const [isPopup, setIsPopup] = useState(false);

  const togglePopup = () => {
    setIsPopup((p) => !p);
  };

  return (
    <div className="view-selector-custom view-selector-custom-desktop">
      <Popup
        close={togglePopup}
        show={isPopup}
        ContentCoponent={VerifiedUsersPopup}
      />
      <button onClick={togglePopup} className="view-selector-custom-btn">
        <img src={images.questionMark.img} alt={images.questionMark.alt} />
      </button>
      <Tooltip content="Realtime tweets about DeFi by a verified list of users" />
    </div>
  );
};

export default VerifiedUsersViewCustom;
