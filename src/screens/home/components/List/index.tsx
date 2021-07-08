import { useCallback, useState } from "react";
import useListItemTransition from "../../hooks/useListItemTransition";
import useCompare from "../../hooks/useCompare";
import {
  IListCategory,
  IDatasetElement,
  IViewOption,
  IViewToHide,
} from "../../types";
import ListItem from "./components/ListItem";
import useHideList from "../../hooks/useHideList";
import Title from "./components/Title";
import useMobile from "../../../../hooks/useMobile";
interface IProps {
  dataset: IDatasetElement[];
  category: IListCategory;
  categoryName: string;
  index: number;
  viewToHide: IViewToHide | null;
  viewOption: IViewOption;
}

const List = ({ dataset, category, viewToHide, viewOption, index }: IProps) => {
  const { title, symbol, image } = category;

  const [activeElement, setActiveElement] = useState<IDatasetElement | null>(
    null
  );
  const [showFullList, setshowFullList] = useState(false);
  const [hideList, delay, translate] = useHideList(
    viewToHide,
    index,
    viewOption.value
  );

  const [isMobile] = useMobile();
  const { transitions, height } = useListItemTransition(
    dataset,
    activeElement,
    isMobile && !showFullList
  );
  const [newEntities] = useCompare(dataset);
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
      <Title image={image} title={title} />
      <div className="list-flex" style={{ height }}>
        {transitions((style, item, t, index) => {
          const { name } = item;
          const isNew = newEntities.includes(name);
          return (
            <ListItem
              isOpen={activeElement?.name === name}
              setActiveElement={() => handleActiveElement(item)}
              item={item}
              symbol={symbol}
              isNew={isNew}
              index={index}
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
      {isMobile && (
        <button
          className="list-mobile-toggle"
          onClick={() => setshowFullList(!showFullList)}
        >
          {showFullList ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default List;
