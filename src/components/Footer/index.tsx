import { useContext } from "react";
import WithLoveText from "../WithLoveText";
import { ThemeContext } from "../../providers/ThemeProvider";

const Footer = () => {
  const { isMobile } = useContext(ThemeContext);

  return !isMobile ? (
    <footer className="footer flex">
      <div></div>
      {/*<div className="footer-policy flex">*/}
      {/*  <a href="/">Policy Privacy</a>*/}
      {/*  <a href="/">All rights reserved DeFi</a>*/}
      {/*</div>*/}
      <WithLoveText />
    </footer>
  ) : null;
};

export default Footer;
