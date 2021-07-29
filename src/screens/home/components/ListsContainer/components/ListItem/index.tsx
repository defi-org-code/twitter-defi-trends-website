import { animated } from "@react-spring/web";
import { JSXElementConstructor, memo } from "react";
import { DATASET_TYPES, IDatasetElement } from "../../../../types";
import ListItemTop from "./ListItemTop";

interface IProps {
  style: any;
  item: IDatasetElement;
  isOpen: boolean;
  setActiveElement: (item: IDatasetElement) => void;
  symbol: string;
  index: number;
  ContentComponent: JSXElementConstructor<any>;
  apiIntervalSeconds: number;
  categoryName: DATASET_TYPES;
  tweetsUrl: string;
}

const ListItem = ({
  style,
  item,
  setActiveElement,
  isOpen,
  symbol,
  ContentComponent,
  apiIntervalSeconds,
  categoryName,
  tweetsUrl,
}: IProps) => {
  const { name } = item;
  const isUrl = categoryName === DATASET_TYPES.URLS;

  const handleSelect = () => {
    if (isUrl) {
      window.open(name);
    } else {
      setActiveElement(item);
    }
  };

  return (
    <animated.div className="card" style={style}>
      <div className={isOpen ? "list-item list-item-open" : "list-item"}>
        <ListItemTop
          handleSelect={handleSelect}
          item={item}
          isOpen={isOpen}
          symbol={symbol}
          apiIntervalSeconds={apiIntervalSeconds}
          categoryName={categoryName}
          isUrl={isUrl}
        />
        {isOpen && (
          <div className="list-item-custom">
            <ContentComponent item={item} symbol={symbol} apiUrl={tweetsUrl} />
          </div>
        )}
      </div>
    </animated.div>
  );
};

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  const isSameNum = prevProps.item.count === nextProps.item.count;
  const isSameProcessed = prevProps.item.processed === nextProps.item.processed;
  const isSameActive = prevProps.isOpen === nextProps.isOpen;
  return isSameNum && isSameActive && isSameProcessed;
};

export default memo(ListItem, areEqual);
