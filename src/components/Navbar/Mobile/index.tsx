import { useContext, useState } from "react";
import images from "../../../constans/images";
import useAnalytics from "../../../hooks/useAnalytics";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { ANALYTICS_EVENTS } from "../../../services/analytics/types";
import Menu from "./Menu";

function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  const { sendEventAndRunAction } = useAnalytics();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar-mobile" style={{ zIndex: showMenu ? 9999 : 999 }}>
      <div className="navbar-mobile-top flex">
        <button
          className="navbar-mobile-top-open"
          onClick={sendEventAndRunAction.bind(
            null,
            ANALYTICS_EVENTS.TAP_ON_MENU,
            undefined,
            toggleMenu
          )}
        >
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
