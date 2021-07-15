import CountUp from "react-countup";

interface IProps {
  value: number;
  duration?: number;
  start?: number;
}

const Counter = ({ value, duration = 3, start = 0 }: IProps) => {
  return (
    <CountUp
      end={value}
      start={start}
      duration={duration}
      separator=","
      delay={0}
    />
  );
};
export default Counter;
