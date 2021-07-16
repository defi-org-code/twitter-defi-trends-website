/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { sleep } from "../../../utils";
import { LISTS_AMOUNT_FOR_ANIMATION_IN_TAB, LIST_HIDE_ANIMATION_CONFIG } from "../constants";
import { IViewToHide, VIEW_SELECTOR_OPTIONS } from "../types";

const handleDelay = async (viewToHide: IViewToHide, index: number) => {
  const { isBigger, view } = viewToHide;
  const animationDelay = LIST_HIDE_ANIMATION_CONFIG[view].animationDelay;
  await sleep(animationDelay * 1000);
  if (isBigger && index === 0) {
    return 0;
  }

  if (isBigger) {
    return index / 10;
  }
  if (index === LISTS_AMOUNT_FOR_ANIMATION_IN_TAB - 1) {
    return 0;
  }
  return (LISTS_AMOUNT_FOR_ANIMATION_IN_TAB - index - 1) / 10;
};

const useHideList = (
  viewToHide: IViewToHide | null,
  index: number,
  viewName: VIEW_SELECTOR_OPTIONS
): [boolean, number, string] => {
  const [hideList, setHideList] = useState(false);
  const [translate, setTranslate] = useState("");
  const [delay, setDelay] = useState(0);
  const { isMobile } = useContext(ThemeContext);
  const hdeDesktop = async () => {
    if (!viewToHide) return;
    const translateStr = viewToHide.isBigger ? "-100px" : "100px";
    const delay = await handleDelay(viewToHide, index);
    setDelay(delay);
    setTranslate(translateStr);
    setHideList(true);
  };

  const hideMobile = () => {};
  const checkIfNeedToHide = () => {
    if (viewToHide?.view === viewName) {
      if (isMobile) {
        hideMobile();
      } else {
        hdeDesktop().then();
      }
    }
  };

  useEffect(() => {
    checkIfNeedToHide();
  }, [index, viewName, viewToHide]);
  return [hideList, delay, translate];
};

export default useHideList;
