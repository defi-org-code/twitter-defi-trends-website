import React from "react";
import Lottie from "lottie-react";

interface IProps {
  animation: any;
  customClassName?: string;
}
const LottieAnimation = ({ animation, customClassName }: IProps) => {
  const className = customClassName ? `${customClassName} lottie` : "lottie";
  return (
    <div className={className}>
      <Lottie animationData={animation} />
    </div>
  );
};

export default LottieAnimation;
