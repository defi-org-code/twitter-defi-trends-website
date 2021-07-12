import images from "../../constans/images";
import useMobile from "../../hooks/useMobile";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Navbar = () => {
  const [isMobile] = useMobile();
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Navbar;
