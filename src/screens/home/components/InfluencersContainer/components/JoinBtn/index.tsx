import { useContext, useState } from "react";
import images from "../../../../../../constans/images";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import VerifiedUsersPopup from "../../../Popups/VerifiedUsersPopup";
import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ANALYTICS_EVENTS } from "../../../../../../services/analytics/types";
import CustomModal from "../../../../../../components/CustomModal";

const JoinBtn = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isPopup, setIsPopup] = useState(false);
  const { sendEventAndRunAction } = useAnalytics();

  return (
    <>
      <button
        className="influencers-join"
        onClick={sendEventAndRunAction.bind(
          null,
          ANALYTICS_EVENTS.TAP_ON_WANT_TO_BE_MENTIONED,
          undefined,
          setIsPopup.bind(null, true)
        )}
      >
        <p>Want to be mentioned here?</p>
        <img
          src={isDarkMode ? images.greenTwitter.img : images.twitterBlack.img}
          alt={isDarkMode ? images.twitterBlack.alt : images.greenTwitter.alt}
        />
      </button>

      <CustomModal
        closePopup={setIsPopup.bind(null, false)}
        isOpen={isPopup}
        content={<VerifiedUsersPopup onClick={setIsPopup.bind(null, false)} />}
      />
    </>
  );
};

export default JoinBtn;
