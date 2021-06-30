import { Ref, useEffect, useRef, useState } from "react";

const useListItemRefs = (count: number): [boolean] => {
  const [countChanged, setCountChange] = useState(false);
  const countRef = useRef(0);

  useEffect(() => {
    const { current } = countRef;
    if (current && current !== count) {
      setCountChange(true);
      setTimeout(() => {
        setCountChange(false);
      }, 1000);
    }
    countRef.current = count;
  }, [count, countRef]);

  return [countChanged];
};

export default useListItemRefs;
