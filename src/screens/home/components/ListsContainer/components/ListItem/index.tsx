import { animated } from "@react-spring/web";
import { JSXElementConstructor, memo } from "react";
import Counter from "../../../../../../components/Counter";
import useListItemUpdate from "../../../../hooks/useListItemUpdate";
import UpdatedAnimation from "./UpdatedAnimation";
import { DATASET_TYPES, IDatasetElement } from "../../../../types";
import Tooltip from "../../../../../../components/Tooltip";

import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ANALYTICS_EVENTS } from "../../../../../../services/analytics/types";
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
  const { sendEventAndRunAction } = useAnalytics();
  const { name, count, processed, extra } = item;
  const isUrl = categoryName === DATASET_TYPES.URLS;
  const [updated] = useListItemUpdate(
    count,
    processed,
    countForAnimation,
    index,
    positionsJumpForAnimation
  );

  const handleSelect = () => {
    if (isUrl) {
      window.open(name);
    } else {
      setActiveElement();
    }
  };

  return (
    <animated.div className="card" style={style}>
      <div className={handleClassName(isOpen)}>
        <figure
          className="list-item-action"
          onClick={sendEventAndRunAction.bind(
            null,
            ANALYTICS_EVENTS.TAP_ON_ENTITY,
            categoryName,
            handleSelect
          )}
        />
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
        {updated && <UpdatedAnimation />}
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
