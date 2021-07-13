import { useEffect, useState } from "react";
import { MOBILE } from "../constans";
import useWindowSize from "./useResize";

const useMobile = (): [boolean] => {
  const [isMobile, setIsMobile] = useState(false);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width && width <= MOBILE) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return [isMobile];
};

export default useMobile;
