import { useContext, useState } from "react";
import images from "../../../constans/images";
import useAnalytics from "../../../hooks/useAnalytics";
import { ThemeContext } from "../../../providers/ThemeProvider";
import Menu from "./Menu";

function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const { tapOnMenu } = useAnalytics();

  const onClick = () => {
    tapOnMenu();
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar-mobile" style={{ zIndex: showMenu ? 9999 : 999 }}>
      <div className="navbar-mobile-top flex">
        <button className="navbar-mobile-top-open" onClick={onClick}>
          {isDarkMode ? (
            <img src={images.menuDotsDark.img} alt={images.menuDotsDark.alt} />
          ) : (
            <img src={images.menuDots.img} alt={images.menuDots.alt} />
          )}
        </button>
        <span className="navbar-color-text flex">
          <strong>Realtime</strong> <p>DeFi</p>
          <strong>Tweets</strong>
        </span>
      </div>
      <Menu
        isDarkMode={isDarkMode}
        showMenu={showMenu}
        openMenu={() => setShowMenu(true)}
        hideMenu={() => setShowMenu(false)}
      />
    </div>
  );
}

export default MobileNavbar;
