import { useCallback, useEffect, useState } from "react";
import useListItemTransition from "../../hooks/useListItemTransition";
import useCompare from "../../hooks/useCompare";
import {
  IListCategory,
  IDatasetElement,
  VIEW_SELECTOR_OPTIONS,
  IViewOption,
  IViewToHide,
} from "../../types";
import ListItem from "./components/ListItem";
import FrameImg from "../../../../assets/images/frame.png";
import useWindowSize from "../../../../hooks/useResize";
import { MOBILE_LIST_LIMIT, MOBILE_WIDTH_LIMIT } from "../../constants";
import useHideList from "../../hooks/useHideList";

interface IProps {
  dataset: IDatasetElement[];
  category: IListCategory;
  categoryName: string;
  index: number;
  viewToHide: IViewToHide | null;
  viewOption: IViewOption;
}

const List = ({ dataset, category, viewToHide, viewOption, index }: IProps) => {
  const [activeElement, setActiveElement] = useState<IDatasetElement | null>(
    null
  );
  const [showFullList, setshowFullList] = useState(false);
  const [hideList, delay, translate] = useHideList(
    viewToHide,
    index,
    viewOption.value
  );

  const [width] = useWindowSize();
  const isMobile = width > 0 && width < MOBILE_WIDTH_LIMIT;
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

  const { title, symbol, image } = category;
  return (
    <div
      className="list"
      style={{
        transform: hideList ? `translate(${translate})` : "none",
        transitionDelay: `${delay}s`,
        opacity: hideList ? 0 : 1,
      }}
    >
      <section className="list-title flex">
        <figure className="list-title-images">
          <img
            src={FrameImg}
            alt="category icon"
            className="list-title-images-frame"
          />
          <img
            src={image}
            alt="category icon"
            className="list-title-images-main"
          />
        </figure>
        <h3>{title}</h3>
      </section>
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
