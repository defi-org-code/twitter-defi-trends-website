import React, { useState, useEffect, useRef } from "react";
import { APP_LOADER_ANIMATION_TIMEOUT } from "../../constans";

const AppLoader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hideWithAnimation();
    setTimeout(() => {
      setShowLoader(false);
    }, APP_LOADER_ANIMATION_TIMEOUT + 1000);
  }, []);

  const hideWithAnimation = () => {
    setTimeout(() => {
      if (!ref.current) return;
      ref.current.style.opacity = "0";
    }, APP_LOADER_ANIMATION_TIMEOUT);
  };

  return showLoader ? (
    <div ref={ref} className="app-loader flex">
      Loading...
    </div>
  ) : null;
};

export default AppLoader;
