import { CountUp } from "use-count-up";
// import CountUp from "react-countup";

interface IProps {
  value: number;
  duration?: number;
  start?: number;
}

const Counter = ({ value, duration = 3, start = 0 }: IProps) => {
  return (
    <CountUp
      end={value}
      isCounting
      start={start}
      duration={duration}
      thousandsSeparator=","
    />
  );
};
export default Counter;
