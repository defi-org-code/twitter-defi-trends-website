import { useEffect, useRef, useState } from "react";
import {
  LIST_ITEM_ANIMATION_TIMEOUT_SECONDS,
  POSITIONS_TO_JUMP,
  COUNT_TO_JUMP,
} from "../constants";
import { numbersDiff } from "../utils/numberUtil";

const handleCount = (prevCount: number, currentCount: number) => {
  if (!prevCount || currentCount <= prevCount) {
    return false;
  }
  return numbersDiff(currentCount, prevCount) > COUNT_TO_JUMP;
};

const handlePosition = (prevIndex: number, currentIndex: number) => {
  if (!prevIndex || currentIndex >= prevIndex) {
    return false;
  }
  return numbersDiff(currentIndex, prevIndex) >= POSITIONS_TO_JUMP;
};

const useListItemUpdate = (
  count: number,
  index: number,
  isNewEntity: boolean
): [boolean] => {
  const [updated, setUpdated] = useState(false);
  const prevCount = useRef(0);
  const prevIndex = useRef(0);

  useEffect(() => {
    const countIncreased = handleCount(prevCount.current, count);
    const positionIncreased = handlePosition(prevIndex.current, index);
    prevCount.current = count;
    prevIndex.current = index;
    if (countIncreased || positionIncreased || isNewEntity) {
      setTimeout(() => {
        setUpdated(true);
      }, 100);
      setTimeout(() => {
        setUpdated(false);
      }, LIST_ITEM_ANIMATION_TIMEOUT_SECONDS * 1000);
    }
  }, [count, index, isNewEntity]);

  return [updated];
};

export default useListItemUpdate;
