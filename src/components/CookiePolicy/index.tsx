import React, { useEffect, useState, useRef } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import analytics from "../../services/analytics";
import Button from "../Button";
const CookiePolicy = () => {
  const [cookiePolicy, setCookiePolicy] = useLocalStorage("cookie-policy", "");
  const [show, setshow] = useState(false);
  const container: any = useRef(null);

  useEffect(() => {
    if (!cookiePolicy) {
      return setshow(true);
    }
    handleAccepted(cookiePolicy);
  }, [cookiePolicy]);

  const handleAccepted = (cookiePolicy: string) => {
    if (cookiePolicy === "enabled") {
      analytics.init();
      console.log("cookies enabled");
    }
    setshow(false);
  };

  return show ? (
    <div className="cookie-policy" ref={container}>
      <div className="cookie-policy-content flex">
        <p>
          This website uses cookies only to help the website to function and also to track how you interact with it.
        </p>
        <section className="cookie-policy-content-btns flex">
          <Button
            onClick={() => setCookiePolicy("enabled")}
            text="Got it"
          />
        </section>
      </div>
    </div>
  ) : null;
};

export default CookiePolicy;
