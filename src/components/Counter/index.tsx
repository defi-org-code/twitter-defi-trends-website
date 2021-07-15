import {useCountUp} from "use-count-up/lib";
import React from "react";

interface IProps {
    value: number;
    duration?: number;
    start?: number;
}

const Counter = ({value, duration = 3, start = 0}: IProps) => {
    const { value:animatedValue } = useCountUp({
        isCounting: value !== start,
        end: value,
        start: start,
        duration: duration,
        autoResetKey: value,
        thousandsSeparator: ","
    });

    return <>{animatedValue}</>
};
export default Counter;
