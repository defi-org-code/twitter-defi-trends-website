import images from "../../../../constans/images";
import ThemeToggle from "../../../../components/ThemeToggle";

const Header = () => {
  return (
    <div className="home-header flex">
      <img src={images.twitterColor.img} alt={images.twitterColor.alt} />
      <span className="flex">
        <strong>Realtime</strong> <p>DEFI</p>
        <strong>Twitter mentions</strong>
        on the really important things
      </span>
      <ThemeToggle />
    </div>
  );
};

export default Header;
