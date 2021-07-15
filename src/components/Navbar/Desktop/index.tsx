import images from "../../../constans/images";
import ThemeToggle from "../../ThemeToggle";

function DesktopNavbar() {
  return (
    <div className="navbar flex">
      <img src={images.twitterColor.img} alt={images.twitterColor.alt} />
      <span className="navbar-color-text flex">
       <strong>Realtime</strong> <p>DeFi</p>
        <strong>Tweets</strong>
        on what really going on in crypto
      </span>
      <ThemeToggle customClassName="desktop-toggle" />
    </div>
  );
}

export default DesktopNavbar;
