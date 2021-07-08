import { useEffect, useState } from "react";
import { sleep } from "../../../utils";
import { LISTS_AMOUNT, LIST_HIDE_ANIMATION_CONFIG } from "../constants";
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
  if (index === LISTS_AMOUNT - 1) {
    return 0;
  }
  return (LISTS_AMOUNT - index - 1) / 10;
};

const useHideList = (
  viewToHide: IViewToHide | null,
  index: number,
  viewName: VIEW_SELECTOR_OPTIONS
): [boolean, number, string] => {
  const [hideList, setHideList] = useState(false);
  const [translate, setTranslate] = useState("");
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    async function checkIfNeedToHide() {
      if (viewToHide?.view === viewName) {
        const translateStr = viewToHide.isBigger ? "-100px" : "100px";
        const delay = await handleDelay(viewToHide, index);
        setDelay(delay);
        setTranslate(translateStr);
        setHideList(true);
      }
    }
    checkIfNeedToHide();
  }, [index, viewName, viewToHide]);
  return [hideList, delay, translate];
};

export default useHideList;
