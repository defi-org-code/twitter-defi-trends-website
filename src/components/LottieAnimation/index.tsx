/* eslint-disable react-hooks/exhaustive-deps */
import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

interface IProps {
  animation: any;
  customClassName?: string;
  subframe?: boolean;
}
const LottieAnimation = ({ animation, customClassName, subframe }: IProps) => {
  const container = useRef<any>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    if (subframe) {
      anim.setSubframe(true);
    }
    anim.addEventListener("complete", () => {
      anim.destroy();
    });
    return () => {
      anim.destroy();
    };
  }, []);

  const className = customClassName ? `${customClassName} lottie` : "lottie";
  return <div className={className} ref={container}/>;
};

export default LottieAnimation;
