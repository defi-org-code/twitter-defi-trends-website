/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { APP_LOADER_ANIMATION_TIMEOUT, lottieAnimations } from "../../constans";
import LottieAnimation from "../../components/LottieAnimation";
import { sleep } from "../../utils";

interface IProps {
  children: JSX.Element;
}
const AppLoader = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    await sleep(APP_LOADER_ANIMATION_TIMEOUT);
    setIsLoading(false);
    hideWithAnimation();
  };

  const hideWithAnimation = async () => {
    if (!ref.current) return;
    ref.current.style.opacity = "0";
    await sleep(200);
    setHideLoader(true);
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
