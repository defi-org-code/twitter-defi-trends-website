import {
  LIST_ELEMENT_DEFAULT_HEIGHT,
  LIST_ELEMENT_OPENED_HEIGHT,
  MOBILE_LIST_LIMIT,
  LIST_ELEMENT_OPENED_HEIGHT_MOBILE,
} from "../constants";
import { IDatasetElement } from "../types";
import { useTransition } from "@react-spring/web";

const getItemHeight = (
  item: IDatasetElement,
  activeItem: IDatasetElement | null,
  isMobile: boolean
) => {
  if (!activeItem) {
    return LIST_ELEMENT_DEFAULT_HEIGHT;
  }
  if (item.name === activeItem.name) {
    return isMobile
      ? LIST_ELEMENT_OPENED_HEIGHT_MOBILE
      : LIST_ELEMENT_OPENED_HEIGHT;
  }
  return LIST_ELEMENT_DEFAULT_HEIGHT;
};

const handleDataset = (
  dataset: IDatasetElement[],
  isMobile: boolean,
  showFullList: boolean
) => {
  const sorted = dataset.sort((a, b) =>
    a.count !== b.count ? (a.count < b.count ? 1 : -1) : 0
  );
  if (isMobile && !showFullList) {
    return sorted.slice(0, MOBILE_LIST_LIMIT);
  }
  return sorted;
};

const useListItemTransition = (
  dataset: IDatasetElement[],
  activeElement: IDatasetElement | null,
  isMobile: boolean,
  showFullList: boolean
) => {
  let height = 0;
  const transitions = useTransition(
    handleDataset(dataset, isMobile, showFullList).map((data) => {
      const itemHeight = getItemHeight(data, activeElement, isMobile);
      return {
        ...data,
        height: itemHeight,
        y: (height += itemHeight) - itemHeight,
        isActive: data.name === activeElement?.name,
      };
    }),
    {
      key: (item: IDatasetElement) => item.name,
      from: { opacity: 0 },
      leave: { opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
      // config: ({ isActive, height }) => {
      //   return {
      //     duration: 300,
      //   };
      // },
    }
  );
  return { transitions, height };
};

export default useListItemTransition;
