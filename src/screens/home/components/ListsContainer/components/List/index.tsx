import { memo, useCallback, useState } from "react";
import useListItemTransition from "../../../../hooks/useListItemTransition";
import {
  IListCategory,
  IDatasetElement,
  IViewOption,
  IViewToHide,
  DATASET_TYPES,
} from "../../../../types";
import ListItem from "../ListItem";
import useHideList from "../../../../hooks/useHideList";
import Title from "../Title";
import MobileShowMore from "./MobileShowMore";
interface IProps {
  dataset: IDatasetElement[];
  category: IListCategory;
  categoryName: DATASET_TYPES;
  index: number;
  viewToHide: IViewToHide | null;
  viewOption: IViewOption;
}

const List = ({
  dataset,
  category,
  viewToHide,
  viewOption,
  index,
  categoryName,
}: IProps) => {
  const { title, symbol, titleImg, titleDarkImg } = category;
  const [activeElement, setActiveElement] = useState<IDatasetElement | null>(
    null
  );
  const [showFullList, setshowFullList] = useState(false);
  const [hideList, delay, translate] = useHideList(
    viewToHide,
    index,
    viewOption.value
  );

  const { transitions, height } = useListItemTransition(
    dataset,
    activeElement,
    showFullList
  );
  const handleActiveElement = useCallback(
    (element: IDatasetElement) => {
      if (activeElement?.name === element.name) {
        return setActiveElement(null);
      }
      return setActiveElement(element);
    },
    [activeElement]
  );

  return (
    <div
      className="list"
      style={{
        transform: hideList ? `translate(${translate})` : "none",
        transitionDelay: `${delay}s`,
        opacity: hideList ? 0 : 1,
      }}
    >
      <Title image={titleImg} darkImage={titleDarkImg} title={title} />
      <div className="list-flex" style={{ height }}>
        {transitions((style, item, t, index) => {
          const { name } = item;
          return (
            <ListItem
              isOpen={activeElement?.name === name}
              setActiveElement={() => handleActiveElement(item)}
              item={item}
              symbol={symbol}
              index={index}
              categoryName={categoryName}
              ContentComponent={category.component}
              countForAnimation={viewOption.countForAnimation}
              positionsJumpForAnimation={viewOption.positionsJumpForAnimation}
              apiIntervalSeconds={viewOption.apiIntervalSeconds}
              style={{
                zIndex: dataset.length - index,
                ...style,
              }}
            />
          );
        })}
      </div>
      <MobileShowMore
        categoryName={categoryName}
        showFullList={showFullList}
        setshowFullList={setshowFullList}
      />
    </div>
  );
};

export default memo(List);
