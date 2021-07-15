import React, { useEffect, useState } from "react";
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
const createDate = () => {
  const date = new Date();
  const endOfDayDate = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59)
  );
  return endOfDayDate.getTime();
};
const CountDown = () => {
  const [date, setDate] = useState(createDate());

  const [hide, setHide] = useState(false);
  const onComplete = () => {
    setHide(true);
    setDate(createDate());
    setTimeout(() => {
      setHide(false);
    }, 0);
  };

  return (
    <div className="countdown flex">
      <p className="countdown-title">Starting a new day in</p>
      {!hide && (
        <Countdown
          autoStart
          zeroPadDays={2}
          date={date}
          renderer={renderer}
          onComplete={onComplete}
        />
      )}
    </div>
  );
};

export default CountDown;
