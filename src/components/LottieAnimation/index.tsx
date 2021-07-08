import React from "react";
import Lottie from "lottie-react";

interface IProps {
  animation: any;
}
const LottieAnimation = ({ animation }: IProps) => {
  return (
    <div className="lottie">
      <Lottie animationData={animation} />
    </div>
  );
};

export default LottieAnimation;
