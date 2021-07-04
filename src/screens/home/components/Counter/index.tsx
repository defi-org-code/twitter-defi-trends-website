import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

interface IProps {
  value: number;
  duration?: number;
  animationOnStart?: boolean;
}

const Counter = ({ value, duration = 3, animationOnStart }: IProps) => {
  const mountRef = useRef(false);
  const { countUp, update } = useCountUp({
    start: animationOnStart ? value / 2 : value,
    end: value,
    duration,
    separator: ",",
  });

  useEffect(() => {
    if (!mountRef.current) {
      mountRef.current = true;
    }
    update(value);
  }, [update, value]);

  return <span>{countUp}</span>;
};

export default Counter;
