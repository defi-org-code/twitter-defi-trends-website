/* eslint-disable react-hooks/exhaustive-deps */
import CountUp from "react-countup";

interface IProps {
  value: number;
  duration?: number;
  start?: number;
}

const Counter = ({ value, duration = 3, start = 0 }: IProps) => {
  return (
    <CountUp end={value} duration={duration} separator="," start={start} />
  );
};

export default Counter;
