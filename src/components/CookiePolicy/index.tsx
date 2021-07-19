/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { POLICY_COOKIE_LOCALE_STORAGE_NAME } from "../../constans";
import useAnalytics from "../../hooks/useAnalytics";
import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../Button";
const CookiePolicy = () => {
  const [cookiePolicyAgreed, setPolicyCookieAgreed] = useLocalStorage(
    POLICY_COOKIE_LOCALE_STORAGE_NAME,
    false
  );
  const { init } = useAnalytics();
  const [show, setshow] = useState(false);
  const container: any = useRef(null);

  useEffect(() => {
    if (!cookiePolicyAgreed) {
      return setshow(true);
    }
    init();
    setshow(false);
  }, [cookiePolicyAgreed]);

  return show ? (
    <div className="cookie-policy" ref={container}>
      <div className="cookie-policy-content flex">
        <p>
          This website uses cookies only to help the website to function and
          also to track how you interact with it.
        </p>
        <section className="cookie-policy-content-btns flex">
          <Button onClick={() => setPolicyCookieAgreed(true)} text="Got it" />
        </section>
      </div>
    </div>
  ) : null;
};

export default CookiePolicy;
