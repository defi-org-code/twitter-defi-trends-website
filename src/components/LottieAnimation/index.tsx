/* eslint-disable react-hooks/exhaustive-deps */
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

interface IProps {
  animation: any;
  customClassName?: string;
}
const LottieAnimation = ({ animation, customClassName }: IProps) => {
  const container = useRef<any>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
        progressiveLoad: false,
        hideOnTransparent: true,
      },
    });
    anim.addEventListener("complete", () => {
      anim.destroy();
    });
    return () => {
      anim.destroy();
    };
  }, []);

  const className = customClassName ? `${customClassName} lottie` : "lottie";
  return <div className={className} ref={container}></div>;
};

export default LottieAnimation;
