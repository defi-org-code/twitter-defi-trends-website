import { useState } from "react";
import images from "../../../../../../../constans/images";
import CustomModal from "../../../../../../../components/CustomModal";
import VerifiedUsersPopup from "../../../../Popups/VerifiedUsersPopup";
import Tooltip from "../../../../../../../components/Tooltip";
const VerifiedUsersViewCustom = () => {
  const [isPopup, setIsPopup] = useState(false);
  const togglePopup = () => {
    setIsPopup((p) => !p);
  };

  return (
    <div className="view-selector-custom view-selector-custom-desktop">
      <CustomModal
        closePopup={togglePopup}
        isOpen={isPopup}
        content={<VerifiedUsersPopup onClick={togglePopup} />}
      />

      <Tooltip
        content="Realtime tweets about DeFi by a verified list of users"
        className="view-selector-custom-btn"
        onClick={() => togglePopup()}
        btnContent={
          <img src={images.questionMark.img} alt={images.questionMark.alt} />
        }
      />
    </div>
  );
};

export default VerifiedUsersViewCustom;
