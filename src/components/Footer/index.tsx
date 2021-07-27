import { useContext } from "react";
import WithLoveText from "../WithLoveText";
import { ThemeContext } from "../../providers/ThemeProvider";
import PrivacyPolicy from "../PrivacyPolicy/index";
const Footer = () => {
  const { isMobile } = useContext(ThemeContext);

  return !isMobile ? (
    <footer className="footer flex">
      <div></div>
      <PrivacyPolicy />
      <WithLoveText />
    </footer>
  ) : null;
};

export default Footer;
