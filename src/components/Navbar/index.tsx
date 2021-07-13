import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const Navbar = () => {
  const { isMobile } = useContext(ThemeContext);

  return isMobile ? <Mobile /> : <Desktop />;
};

export default Navbar;
