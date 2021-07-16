import { useRef, useState } from "react";
import Tooltip from "../../../../../../../components/Tooltip";
import images from "../../../../../../../constans/images";
import Popup from "../../../../../../../components/Popup";
import VerifiedUsersPopup from "../../../../Popups/VerifiedUsersPopup";
import useClickOutside from "../../../../../../../hooks/useClickOutside";
const VerifiedUsersViewCustomMobile = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [showToolip, setShowToolip] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  const closePopup = () => {
    setIsPopup(false);
    setShowToolip(false);
  };

  const handleClick = () => {
    setShowToolip(true);
    setIsPopup(true);
  };

  useClickOutside(container, () => setShowToolip(false));

  return (
    <div className="view-selector-custom" ref={container}>
      <Popup
        close={closePopup}
        show={isPopup}
        ContentCoponent={VerifiedUsersPopup}
      />
      <button onClick={handleClick} className="view-selector-custom-btn">
        <img src={images.questionMark.img} alt={images.questionMark.alt} />
      </button>
      <Tooltip
        style={{ opacity: showToolip ? 1 : 0 }}
        content="Realtime tweets about DeFi by a verified list of users"
      />
    </div>
  );
};

export default VerifiedUsersViewCustomMobile;
