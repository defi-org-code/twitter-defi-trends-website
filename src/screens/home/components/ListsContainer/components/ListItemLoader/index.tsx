import React, { CSSProperties, useRef } from "react";
import useOnloadAnimation from "../../../../../../hooks/useOnloadAnimation";
import LottieAnimation from "../../../../../../components/LottieAnimation";
import { lottieAnimations } from "../../../../../../constans";

function Loader() {
  const container = useRef<HTMLDivElement>(null);
  const style: CSSProperties = { opacity: 1 };
  useOnloadAnimation(container, style, 0.1);
  return (
    <div ref={container} style={{ opacity: 0 }} className="list-item-loader">
      <LottieAnimation animation={lottieAnimations.loadingSmall} />
    </div>
  );
}

export default Loader;
