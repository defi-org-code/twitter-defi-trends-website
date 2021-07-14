import { useLottie } from "lottie-react";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

interface IProps {
  animation: any;
  customClassName?: string;
}
const LottieAnimation = ({ animation, customClassName }: IProps) => {
  const container = useRef<any>(null);
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
    width: 100,
    height: 50,
  };

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
  }, []);

  // const { View } = useLottie(options);
  const className = customClassName ? `${customClassName} lottie` : "lottie";
  return <div className={className} ref={container}></div>;
};

export default LottieAnimation;
