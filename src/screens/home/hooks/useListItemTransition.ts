import React from "react";
import {
  LIST_ELEMENT_DEFAULT_HEIGHT,
  LIST_ELEMENT_OPENED_HEIGHT,
} from "../constants";
import { IDatasetElement } from "../types";
import { useTransition } from "@react-spring/web";

const getItemHeight = (
  item: IDatasetElement,
  activeItem: IDatasetElement | null
) => {
  if (!activeItem) {
    return LIST_ELEMENT_DEFAULT_HEIGHT;
  }
  if (item.name === activeItem.name) {
    return LIST_ELEMENT_OPENED_HEIGHT;
  }
  return LIST_ELEMENT_DEFAULT_HEIGHT;
};

const useListItemTransition = (
  dataset: IDatasetElement[],
  activeElement: IDatasetElement | null
) => {
  let height = 0;
  const transitions = useTransition(
    dataset
      .sort((a, b) => (a.count !== b.count ? (a.count < b.count ? 1 : -1) : 0))
      .map((data) => {
        const itemHeight = getItemHeight(data, activeElement);
        return {
          ...data,
          height: itemHeight,
          y: (height += itemHeight) - itemHeight,
        };
      }),
    {
      key: (item: IDatasetElement) => item.name,
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
      delay: 0,
      //   config: {
      //     duration: 300,
      //   },
    }
  );
  return { transitions, height };
};

export default useListItemTransition;
