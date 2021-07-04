import React, { useEffect, useState } from "react";

const useVisibilityChange = (): [boolean] => {
  const [windowInView, setWindowInView] = useState(true);
  useEffect(() => {
    window.addEventListener("visibilitychange", handleVisibillity);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibillity);
    };
  }, []);

  const handleVisibillity = () => {
    if (document.visibilityState === "hidden") {
      return setWindowInView(false);
    }
    setWindowInView(true);
  };

  return [windowInView];
};

export default useVisibilityChange;
