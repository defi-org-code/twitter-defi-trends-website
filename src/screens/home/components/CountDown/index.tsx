import React from "react";
import Countdown from "react-countdown";

interface IRenderProps {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}
const Completionist = () => <div></div>;
const renderer = ({ hours, minutes, seconds, completed }: IRenderProps) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    const fullMinutes = minutes >= 10 ? minutes : `0${minutes}`;
    const fullHours = hours >= 10 ? hours : `0${hours}`;
    const fullSeconds = seconds >= 10 ? seconds : `0${seconds}`;
    return (
      <div className="flex">
        <section>
          <p className="countdown-time">{fullHours}</p>
          <p className="countdown-text">Hours</p>
        </section>
        <section>
          <p className="countdown-time">{fullMinutes}</p>
          <p className="countdown-text">Minutes</p>
        </section>
        <section>
          <p className="countdown-time">{fullSeconds}</p>
          <p className="countdown-text">Seconds</p>
        </section>
      </div>
    );
  }
};
const CountDown = () => {
  return (
    <div className="countdown flex">
      <p className="countdown-title">Time counter until new day</p>
      <Countdown
        zeroPadDays={2}
        date={Date.now() + 50000000}
        renderer={renderer}
      />
    </div>
  );
};

export default CountDown;
