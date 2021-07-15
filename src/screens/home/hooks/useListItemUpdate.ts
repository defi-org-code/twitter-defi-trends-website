import { useCallback, useEffect, useRef, useState } from "react";
import { LIST_ITEM_ANIMATION_TIMEOUT_SECONDS } from "../constants";
import { numbersDiff } from "../utils/numberUtil";

const useListItemUpdate = (
  count: number,
  processed: number,
  countForAnimation: number,
  index: number,
  positionsJumpForAnimation: number
): [boolean] => {
  const [updated, setUpdated] = useState(false);
  const [positionAnimation, setPositionAnimation] = useState(false);
  const [countAnimation, setCountAnimation] = useState(false);

  const prevIndex = useRef(0);
  const prevCount = useRef(0);
  const prevProcessed = useRef(0);
  const t = useRef<any>(null);

  const isCountAnimationAllowed = useCallback(() => {
    if (!prevCount.current || !prevProcessed.current) {
      prevCount.current = count;
      prevProcessed.current = processed;
      return;
    }
    if (prevCount.current === count || prevProcessed.current === processed) {
      return;
    }
    const isAllowed = numbersDiff(count, processed) >= countForAnimation;
    setCountAnimation(isAllowed);
    prevCount.current = count;
    prevProcessed.current = processed;
  }, [count, countForAnimation, processed]);

  const isPositionAnimationAllowed = useCallback(() => {
    if (!prevIndex.current) {
      prevIndex.current = index;
      return;
    }
    if (index > prevIndex.current) {
      prevIndex.current = index;
      return;
    }
    const isAllowed =
      numbersDiff(index, prevIndex.current) >= positionsJumpForAnimation;
    setPositionAnimation(isAllowed);
    prevIndex.current = index;
  }, [index, positionsJumpForAnimation]);

  useEffect(() => {
    if (positionAnimation || countAnimation) {
      setUpdated(true);
      window.clearTimeout(t.current);
      t.current = setTimeout(() => {
        setUpdated(false);
        setPositionAnimation(false);
        setCountAnimation(false);
      }, LIST_ITEM_ANIMATION_TIMEOUT_SECONDS * 1000);
    }
  }, [countAnimation, positionAnimation]);

  useEffect(() => {
    isPositionAnimationAllowed();
    isCountAnimationAllowed();
  }, [
    count,
    processed,
    index,
    isPositionAnimationAllowed,
    isCountAnimationAllowed,
  ]);

  return [updated];
};

export default useListItemUpdate;
