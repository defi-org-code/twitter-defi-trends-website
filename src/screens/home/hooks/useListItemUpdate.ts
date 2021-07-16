import { useCallback, useEffect, useRef, useState } from "react";
import { sleep } from "../../../utils";
import { ON_FIRE_LIST_ITEM_ANIMATION_DURATION_SECONDS } from "../constants";
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

  const isCountAnimationAllowed = useCallback(() => {
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
    const handleUpdate = async () => {
      if (positionAnimation || countAnimation) {
        setUpdated(true);
        await sleep(ON_FIRE_LIST_ITEM_ANIMATION_DURATION_SECONDS * 1000);
        setUpdated(false);
        setPositionAnimation(false);
        setCountAnimation(false);
      }
    };
    handleUpdate().then();
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
