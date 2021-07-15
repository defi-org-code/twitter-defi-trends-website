/* eslint-disable react-hooks/exhaustive-deps */
import { CSSProperties, useEffect } from "react";
import { sleep } from "../utils";

const useOnloadAnimation = (
  container: any,
  style: CSSProperties,
  timeoutSeconds: number
) => {
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    if (!container.current) return;
    await sleep(timeoutSeconds * 1000);
    const elementStyles = container.current.style;
    container.current.style = { ...elementStyles, ...style };
  };
};

export default useOnloadAnimation;
