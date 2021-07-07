import { useEffect, useState } from "react";

const useVisibilityChange = (
  visibleCallback?: any,
  hiddenCallback?: any
): [boolean] => {
  const [windowInView, setWindowInView] = useState(true);
  useEffect(() => {
    window.addEventListener("visibilitychange", handleVisibillity);
    return () => {
      window.removeEventListener("visibilitychange", handleVisibillity);
    };
  }, []);

  const handleVisibillity = () => {
    if (document.visibilityState === "hidden") {
      return handleHidden();
    } else {
      handleVisible();
    }
  };

  const handleHidden = () => {
    hiddenCallback && hiddenCallback();
    setWindowInView(false);
  };
  const handleVisible = () => {
    visibleCallback && visibleCallback();
    setWindowInView(true);
  };
  return [windowInView];
};

export default useVisibilityChange;
