import React, { useState, useEffect, useRef } from "react";
import { APP_LOADER_ANIMATION_TIMEOUT, lottieAnimations } from "../../constans";
import LottieAnimation from "../../components/LottieAnimation";

interface IProps {
  children: JSX.Element;
}
const AppLoader = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      hideWithAnimation();
    }, APP_LOADER_ANIMATION_TIMEOUT);
  }, []);

  const hideWithAnimation = () => {
    if (!ref.current) return;
    ref.current.style.opacity = "0";
    setTimeout(() => {
      setHideLoader(true);
    }, 200);
  };

  return (
    <>
      {!hideLoader && (
        <div ref={ref} className="app-loader flex">
          <LottieAnimation animation={lottieAnimations.loadingSmall} />
        </div>
      )}
      {!isLoading && children}
    </>
  );
};

export default AppLoader;
