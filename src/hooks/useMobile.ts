import { MOBILE_WIDTH_LIMIT } from "./../screens/home/constants/index";
import React, { useEffect, useState } from "react";
import useWindowSize from "./useResize";

const useMobile = (): [boolean] => {
  const [isMobile, setIsMobile] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width && width <= MOBILE_WIDTH_LIMIT) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);
  return [isMobile];
};

export default useMobile;
