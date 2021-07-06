/* eslint-disable react-hooks/exhaustive-deps */
import CountUp from "react-countup";

interface IProps {
  value: number;
  duration?: number;
  animationOnStart?: boolean;
}

const Counter = ({ value, duration = 3, animationOnStart }: IProps) => {
  return (
    <CountUp
      end={value}
      preserveValue
      start={animationOnStart ? value / 3 : value}
      duration={duration}
      separator=","
    />
  );
};

export default Counter;
