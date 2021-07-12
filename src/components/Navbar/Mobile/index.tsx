import { useContext, useState } from "react";
import images from "../../../constans/images";
import { ThemeContext } from "../../../providers/ThemeProvider";
import Menu from "./Menu";

function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="navbar-mobile">
      <div className="navbar-mobile-top flex">
        <button
          className="navbar-mobile-top-open"
          onClick={() => setShowMenu(!showMenu)}
        >
          {isDarkMode ? (
            <img src={images.menuDotsDark.img} alt={images.menuDotsDark.alt} />
          ) : (
            <img src={images.menuDots.img} alt={images.menuDots.alt} />
          )}
        </button>
        <span className="navbar-color-text flex">
          <strong>Realtime</strong> <p>DEFI</p>
          <strong>Tweets</strong>
        </span>
      </div>
      <Menu
        isDarkMode={isDarkMode}
        showMenu={showMenu}
        toggleMenu={() => setShowMenu(!showMenu)}
      />
    </div>
  );
}

export default MobileNavbar;
