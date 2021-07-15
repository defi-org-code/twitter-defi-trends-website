/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useCountUp } from "react-countup";

interface IProps {
  value: number;
  duration?: number;
  start?: number;
}

const Counter = ({ value, duration = 3, start = 0 }: IProps) => {
  const { countUp, update } = useCountUp({
    start,
    end: value,
    delay: 0,
    duration,
    separator: ",",
  });

  useEffect(() => {
    update(value);
  }, [value]);

  return <>{countUp}</>;
};
export default Counter;
