import { useCallback, useState } from "react";
import useListItemTransition from "../../hooks/useListItemTransition";
import { IListCategory, IDatasetElement } from "../../types";
import ListItem from "./ListItem";
import FrameImg from "../../../../assets/images/frame.png";

interface IProps {
  dataset: IDatasetElement[];
  category: IListCategory;
}

const List = ({ dataset, category }: IProps) => {
  const [activeElement, setActiveElement] = useState<IDatasetElement | null>(
    null
  );
  const { transitions, height } = useListItemTransition(dataset, activeElement);

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
    <div className="list" style={{ height }}>
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
      <div className="list-flex">
        {transitions((style, item, t, index) => {
          return (
            <ListItem
              isOpen={activeElement?.name === item.name}
              setActiveElement={() => handleActiveElement(item)}
              item={item}
              symbol={symbol}
              style={{
                zIndex: dataset.length - index,
                ...style,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
