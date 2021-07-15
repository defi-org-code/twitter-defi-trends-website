import { useContext, useState } from "react";
import images from "../../../../../../constans/images";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import Popup from "../../../../../../components/Popup";
import VarifiedUsersPopup from "../../../Popups/VarifiedUsersPopup";

const JoinBtn = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isPopup, setIsPopup] = useState(false);

  return (
    <>
      <button className="influencers-join" onClick={() => setIsPopup(true)}>
        <p>Want to be mentioned here?</p>
        <img
          src={isDarkMode ? images.greenTwitter.img : images.twitterBlack.img}
          alt={isDarkMode ? images.twitterBlack.alt : images.greenTwitter.alt}
        />
      </button>
      <Popup
        close={() => setIsPopup(false)}
        show={isPopup}
        ContentCoponent={VarifiedUsersPopup}
      />
    </>
  );
};

export default JoinBtn;
