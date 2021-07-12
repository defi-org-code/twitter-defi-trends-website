import { CSSProperties } from "react";
import images from "../../../constans/images";
import ImgComponent from "../../ImgComponent";
import ThemeToggle from "../../ThemeToggle";

interface IProps {
  showMenu: boolean;
  toggleMenu: () => void;
  isDarkMode: boolean;
}
const activeMenu: CSSProperties = { transform: "translate(0)" };

function Menu({ showMenu, toggleMenu, isDarkMode }: IProps) {
  return (
    <div style={showMenu ? activeMenu : {}} className="navbar-mobile-menu">
      <button className="navbar-mobile-menu-close" onClick={toggleMenu}>
        X
      </button>
      <div className="navbar-mobile-menu-top flex">
        <ImgComponent
          src={images.twitterColor.img}
          alt={images.twitterColor.alt}
        />
        <span className="navbar-color-text flex">
          <strong>Realtime</strong> <p>DEFI</p>
          <strong>Tweets</strong>
        </span>
      </div>
      <div className="navbar-mobile-menu-content">
        <section className="flex">
          <p>{isDarkMode ? "Switch to light mode" : "Switch to dark mode"}</p>
          <ThemeToggle customClassName="mobile-toggle" />
        </section>
        <section>
          <a href="/">Privacy Policy</a>
        </section>
        <section>
          <a href="/">About us</a>
        </section>
      </div>
      <div className="navbar-mobile-menu-bottom">
        <section>
          Brought to you with ❤️ by <a href="https://www.orbs.com/"> ORBS</a>
        </section>
        <p>V.3</p>
        <p>All rights reserved DeFi | 2021</p>
      </div>
    </div>
  );
}

export default Menu;
