import { useRef, useState, useEffect } from "react";

const useIsComponentMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

export default function useStateIfMounted(initialValue: any) {
  const isComponentMounted = useIsComponentMounted();
  const [state, setState] = useState(initialValue);
  function newSetState(value: any) {
    if (isComponentMounted.current) {
      setState(value);
    }
  }
  return [state, newSetState];
}
