import { CSSProperties, useRef } from "react";
import images from "../../../constans/images";
import useClickOutside from "../../../hooks/useClickOutside";
import ImgComponent from "../../ImgComponent";
import PrivacyPolicy from "../../PrivacyPolicy";
import ThemeToggle from "../../ThemeToggle";
import WithLoveText from "../../WithLoveText";
interface IProps {
  showMenu: boolean;
  openMenu: () => void;
  hideMenu: () => void;
  isDarkMode: boolean;
}
const activeMenu: CSSProperties = { transform: "translate(0)" };

function Menu({ showMenu, openMenu, hideMenu, isDarkMode }: IProps) {
  const conatiner = useRef<HTMLDivElement>(null);
  useClickOutside(conatiner, () => hideMenu());
  return (
    <div
      style={showMenu ? activeMenu : {}}
      className="navbar-mobile-menu"
      ref={conatiner}
    >
      <button className="navbar-mobile-menu-close" onClick={hideMenu}>
        X
      </button>
      <div className="navbar-mobile-menu-top flex">
        <ImgComponent
          src={images.twitterColor.img}
          alt={images.twitterColor.alt}
        />
        <span className="navbar-color-text flex">
          <strong>Realtime</strong> <p>DeFi</p>
          <strong>Tweets</strong>
        </span>
      </div>
      <div className="navbar-mobile-menu-content">
        <section className="flex">
          <p>{isDarkMode ? "Switch to light mode" : "Switch to dark mode"}</p>
          <ThemeToggle customClassName="mobile-toggle" />
        </section>
        <PrivacyPolicy />
      </div>
      <div className="navbar-mobile-menu-bottom">
        <WithLoveText />
      </div>
    </div>
  );
}

export default Menu;
