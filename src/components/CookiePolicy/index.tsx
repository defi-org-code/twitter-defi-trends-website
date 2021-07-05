import React, { useEffect, useState, useRef } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

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
      //some callback function
      console.log("cookies enabled");
    }
    setshow(false);
  };

  return show ? (
    <div className="cookie-policy" ref={container}>
      <div className="cookie-policy-content flex">
        <p>
          By clicking “Accept All Cookies”, you agree to the storing of cookies
          on your device to enhance site navigation, analyze site usage, and
          assist in our marketing efforts.
        </p>
        <section className="cookie-policy-content-btns flex">
          <button
            className="cookie-policy-content-btns-cancel"
            onClick={() => setCookiePolicy("disabled")}
          >
            Cancel
          </button>
          <button
            onClick={() => setCookiePolicy("enabled")}
            className="cookie-policy-content-btns-accept"
          >
            Accept All Cookies
          </button>
        </section>
      </div>
    </div>
  ) : null;
};

export default CookiePolicy;
