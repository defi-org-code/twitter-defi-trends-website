import { animated } from "@react-spring/web";
import { JSXElementConstructor, memo } from "react";
import Counter from "../../../../../../components/Counter";
import useListItemUpdate from "../../../../hooks/useListItemUpdate";
import UpdatedAnimation from "./UpdatedAnimation";
import { DATASET_TYPES, IDatasetElement } from "../../../../types";
import Tooltip from "../../../../../../components/Tooltip";

import useAnalytics from "../../../../../../hooks/useAnalytics";
interface IProps {
  style: any;
  item: IDatasetElement;
  isOpen: boolean;
  setActiveElement: () => void;
  symbol: string;
  index: number;
  ContentComponent: JSXElementConstructor<any>;
  countForAnimation: number;
  positionsJumpForAnimation: number;
  apiIntervalSeconds: number;
  categoryName: DATASET_TYPES;
}

const handleClassName = (isOpen: boolean) => {
  if (isOpen) {
    return "list-item list-item-open";
  }
  return "list-item";
};

const ListItem = ({
  style,
  item,
  setActiveElement,
  isOpen,
  symbol,
  index,
  ContentComponent,
  countForAnimation,
  positionsJumpForAnimation,
  apiIntervalSeconds,
  categoryName,
}: IProps) => {
  const { tapOnEntity } = useAnalytics();
  const { name, count, processed, extra } = item;
  const isUrl = categoryName === DATASET_TYPES.URLS;
  const [updated] = useListItemUpdate(
    count,
    processed,
    countForAnimation,
    index,
    positionsJumpForAnimation
  );

  const handleClick = () => {
    if (isUrl) {
      tapOnEntity(categoryName);
      return window.open(name);
    }
    setActiveElement();
    if (!isOpen) {
      tapOnEntity(categoryName);
    }
  };

  return (
    <animated.div className="card" style={style}>
      <div className={handleClassName(isOpen)}>
        <figure className="list-item-action" onClick={handleClick} />
        {isUrl && <Tooltip content={`${symbol} ${extra}`} />}
        <div className="list-item-top">
          {isUrl ? (
            <p className="list-item-top-name">{`${symbol} ${extra}`}</p>
          ) : (
            <p className="list-item-top-name">{`${symbol}${name}`}</p>
          )}

          <p className="list-item-top-counter">
            <Counter
              value={count}
              duration={apiIntervalSeconds}
              start={processed}
            />
          </p>
        </div>
        {updated && !isOpen && <UpdatedAnimation />}
        {isOpen && (
          <div className="list-item-custom">
            <ContentComponent item={item} symbol={symbol} />
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
