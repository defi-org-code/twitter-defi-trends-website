/* eslint-disable react-hooks/exhaustive-deps */
import { CSSProperties, useEffect } from "react";

const useOnloadAnimation = (
  container: any,
  style: CSSProperties,
  timeoutSeconds: number
) => {
  useEffect(() => {
    if (!container.current) return;
    let timeOut: any;
    timeOut = setTimeout(() => {
      const elementStyles = container.current.style;
      container.current.style = { ...elementStyles, ...style };
    }, timeoutSeconds * 1000);
    return () => {
      window.clearTimeout(timeOut);
    };
  }, []);
};

export default useOnloadAnimation;
