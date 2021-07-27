import { useCallback, useRef, useState } from "react";
import useListItemTransition from "../../../../hooks/useListItemTransition";
import {
  IListCategory,
  IDatasetElement,
  IViewOption,
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
  viewOption: IViewOption;
  hideView: boolean;
  hideListsDirection: string;
}

const List = ({
  dataset,
  category,
  hideView,
  hideListsDirection,
  viewOption,
  index,
  categoryName,
}: IProps) => {
  const { title, symbol, titleImg, titleDarkImg } = category;
  const [activeElement, setActiveElement] = useState<IDatasetElement | null>(
    null
  );

  const [showFullList, setshowFullList] = useState(false);
  let container = useRef<HTMLDivElement>(null);

  useHideList(hideView, index, hideListsDirection, container);

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
    <div className="list" ref={container}>
      <Title image={titleImg} darkImage={titleDarkImg} title={title} />
      <div className="list-flex" style={{ height }}>
        {transitions((style, item, t, index) => {
          return (
            <ListItem
              isOpen={activeElement?.name === item.name}
              setActiveElement={handleActiveElement}
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

export default List;
