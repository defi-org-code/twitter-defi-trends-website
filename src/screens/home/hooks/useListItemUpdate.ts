import { useCallback, useEffect, useRef, useState } from "react";
import { LIST_ITEM_ANIMATION_TIMEOUT_SECONDS } from "../constants";
import { numbersDiff } from "../utils/numberUtil";

const useListItemUpdate = (
  count: number,
  processed: number,
  countForAnimation: number,
  index: number,
  positionsJumpForAnimation: number,
  isNewEntity: boolean
): [boolean] => {
  const [updated, setUpdated] = useState(false);
  const [numbersAnimation, setNumbersAnimation] = useState(false);
  const [positionAnimation, setPositionAnimation] = useState(false);

  const prevIndex = useRef(0);
  const prevProcessed = useRef(0);
  const prevCount = useRef(0);
  const t = useRef<any>(null);

  const isNumbersAnimationAllowed = useCallback(() => {
    if (!prevProcessed.current || !prevCount.current) {
      prevProcessed.current = processed;
      prevCount.current = count;
      return;
    }
    if (processed !== prevProcessed.current && count !== prevCount.current) {
      const isAllowed = numbersDiff(count, processed) > countForAnimation;
      console.log(numbersDiff(count, processed));
      setNumbersAnimation(isAllowed);
    }
    prevProcessed.current = processed;
    prevCount.current = count;
  }, [count, countForAnimation, processed]);

  const isPositionAnimationAllowed = useCallback(() => {
    if (!prevIndex.current) {
      prevIndex.current = index;
      return;
    }
    const isAllowed =
      numbersDiff(index, prevIndex.current) >= positionsJumpForAnimation;
    setPositionAnimation(isAllowed);
    prevIndex.current = index;
  }, [index, positionsJumpForAnimation]);

  useEffect(() => {
    if (numbersAnimation || positionAnimation || isNewEntity) {
      setUpdated(true);
      window.clearTimeout(t.current);
      t.current = setTimeout(() => {
        setUpdated(false);
        setNumbersAnimation(false);
        setPositionAnimation(false);
      }, LIST_ITEM_ANIMATION_TIMEOUT_SECONDS * 1000);
    }
  }, [numbersAnimation, positionAnimation, isNewEntity]);

  useEffect(() => {
    isNumbersAnimationAllowed();
    isPositionAnimationAllowed();
  }, [
    count,
    processed,
    index,
    isNewEntity,
    isNumbersAnimationAllowed,
    isPositionAnimationAllowed,
  ]);

  return [updated];
};

export default useListItemUpdate;
