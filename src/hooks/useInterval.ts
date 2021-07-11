/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number) => {
  let t = useRef<any>(null);

  useEffect(() => {
    window.clearInterval(t.current);
    set();
    return () => {
      window.clearInterval(t.current);
    };
  }, []);

  const clear = () => {
    if (t.current) {
      window.clearInterval(t.current);
      t.current = null;
    }
  };

  const reset = () => {
    clear();
    set();
  };

  const set = () => {
    if (t.current) {
      return;
    }
    t.current = setInterval(() => {
      callback();
    }, delay * 1000);
  };

  return [clear, set, reset];
};

export default useInterval;
