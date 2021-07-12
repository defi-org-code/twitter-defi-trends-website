import useMobile from "../../hooks/useMobile";

const Footer = () => {
  const [isMobile] = useMobile();
  return !isMobile ? (
    <footer className="footer flex">
      <div></div>
      <div className="footer-policy flex">
        <a href="/">Policy Privacy</a>
        <a href="/">All rights reserved DeFi</a>
      </div>
      <div className="footer-logo">
        Brought to you with ❤ by
        <a href="https://www.orbs.com/" target="_blank" rel="noreferrer">
          ORBS
        </a>
      </div>
    </footer>
  ) : null;
};

export default Footer;
