import { useContext } from "react";
import images from "../../../../../../constans/images";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";

const JoinBtn = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <button className="influencers-join">
      <p>Want to be mentioned here?</p>
      <img
        src={isDarkMode ? images.greenTwitter.img : images.twitterBlack.img}
        alt={isDarkMode ? images.twitterBlack.alt : images.greenTwitter.alt}
      />
    </button>
  );
};

export default JoinBtn;
