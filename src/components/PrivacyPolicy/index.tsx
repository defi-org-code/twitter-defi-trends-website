import { ORBS_EMAIL, routes } from "../../constans";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy flex">
      <Link to={routes.privacyPolicy} target="_blank" rel="noreferrer">
        Policy Privacy
      </Link>
      <span></span>
      <Link to={routes.termsOfUse} target="_blank" rel="noreferrer">
        All rights reserved DeFi
      </Link>

      <span></span>
      <a href={`mailto:${ORBS_EMAIL}`} target="_blank" rel="noreferrer">
        Contact us
      </a>
    </div>
  );
}

export default PrivacyPolicy;
