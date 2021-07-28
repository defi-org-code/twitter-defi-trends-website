/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useRef } from "react";
import { useCountUp } from "use-count-up/lib";

interface IProps {
  value: number;
  duration?: number;
  start?: number;
  changeFunc?: () => void;
}

const Counter = ({ value, duration = 3, start = 0, changeFunc }: IProps) => {
  const currentNum = useRef<any>(null);
  const { value: animatedValue } = useCountUp({
    isCounting: value !== start,
    end: value,
    start: start,
    duration: duration,
    autoResetKey: value,
    easing: "linear",
    thousandsSeparator: ",",
  });
  useEffect(() => {
    if (currentNum.current && currentNum.current !== animatedValue) {
      changeFunc?.();
    }
    currentNum.current = animatedValue;
  }, [animatedValue]);

  return <>{animatedValue}</>;
};
export default memo(Counter);
