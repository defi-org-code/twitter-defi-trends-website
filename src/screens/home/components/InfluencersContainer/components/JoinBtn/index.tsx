import { useContext, useState } from "react";
import images from "../../../../../../constans/images";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import Popup from "../../../../../../components/Popup";
import VerifiedUsersPopup from "../../../Popups/VerifiedUsersPopup";
import useAnalytics from "../../../../../../hooks/useAnalytics";

const JoinBtn = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isPopup, setIsPopup] = useState(false);
  const { tapOnWantToBeMentioned } = useAnalytics();

  const handleClick = () => {
    tapOnWantToBeMentioned();
    setIsPopup(true);
  };
  return (
    <>
      <button className="influencers-join" onClick={handleClick}>
        <p>Want to be mentioned here?</p>
        <img
          src={isDarkMode ? images.greenTwitter.img : images.twitterBlack.img}
          alt={isDarkMode ? images.twitterBlack.alt : images.greenTwitter.alt}
        />
      </button>
      <Popup
        close={() => setIsPopup(false)}
        show={isPopup}
        ContentCoponent={VerifiedUsersPopup}
      />
    </>
  );
};

export default JoinBtn;
