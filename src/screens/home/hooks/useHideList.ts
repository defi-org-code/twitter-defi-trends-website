import { useCallback } from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { LISTS_AMOUNT_FOR_ANIMATION_IN_TAB } from "../constants";
import { HIDE_LISTS_DIRECTION } from "../types";

const handleDelay = async (
  index: number,

  isLeft: boolean
) => {
  if (isLeft && index === 0) {
    return 0;
  }

  if (isLeft) {
    return index / 10;
  }
  if (index === LISTS_AMOUNT_FOR_ANIMATION_IN_TAB - 1) {
    return 0;
  }
  return (LISTS_AMOUNT_FOR_ANIMATION_IN_TAB - index - 1) / 10;
};

const useHideList = (
  hideView: boolean,
  index: number,
  hideListsDirection: string,
  container: any
) => {
  const isLeft = hideListsDirection === HIDE_LISTS_DIRECTION.LEFT;
  const { isMobile } = useContext(ThemeContext);

  const hideList = useCallback(async () => {
    const translateStr = isLeft ? "-100px" : "100px";
    const delay = await handleDelay(index, isLeft);
    if (container && container.current) {
      container.current.style.transform = hideView
        ? `translate(${translateStr})`
        : "none";
      container.current.style.transitionDelay = `${delay}s`;
      container.current.style.opacity = hideView ? 0 : 1;
    }
  }, [container, hideView, index, isLeft]);

  useEffect(() => {
    if (!isMobile && hideView) {
      hideList().then();
    }
  }, [hideList, hideView, isMobile]);
};

export default useHideList;
