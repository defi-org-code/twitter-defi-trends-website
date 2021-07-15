import React, { useContext } from "react";
import images from "../../constans/images";
import { ThemeContext } from "../../providers/ThemeProvider";

function WithLoveText() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="with-love-text flex">
      Brought to you with <figure>❤️</figure> by{" "}
      <a
        href="https://www.orbs.com/"
        target="_blank"
        rel="noreferrer"
        className="flex"
      >
        {isDarkMode ? (
          <img src={images.logo.img} alt={images.logo.alt} />
        ) : (
          <img src={images.blackLogo.img} alt={images.blackLogo.alt} />
        )}
        <p>ORBS</p>
      </a>
    </div>
  );
}

export default WithLoveText;
