import { useContext } from "react";
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
      <div className="footer-logo">
          Brought to you with <span style={{marginRight: "-2px"}}>❤️</span> by <a href="https://www.orbs.com/" target="_blank" rel="noreferrer">ORBS</a>
      </div>
    </footer>
  ) : null;
};

export default Footer;
