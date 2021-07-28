import { animated } from "@react-spring/web";
import { JSXElementConstructor, memo, useRef } from "react";
import Counter from "../../../../../../components/Counter";
import { DATASET_TYPES, IDatasetElement } from "../../../../types";
import Tooltip from "../../../../../../components/Tooltip";
import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ANALYTICS_EVENTS } from "../../../../../../services/analytics/types";

import useBackground from "./useBackground";
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
  const { sendEventAndRunAction } = useAnalytics();
  const { name, count, processed, extra } = item;
  const isUrl = categoryName === DATASET_TYPES.URLS;
  const bgElement = useRef<HTMLDivElement>(null);
  const [handleCounterChange] = useBackground(bgElement);

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
        {isUrl && <Tooltip content={`${symbol} ${extra}`} />}
        <div
          className="list-item-top"
          onClick={sendEventAndRunAction.bind(
            null,
            ANALYTICS_EVENTS.TAP_ON_ENTITY,
            categoryName,
            handleSelect
          )}
        >
          {isUrl ? (
            <p className="list-item-top-name">{`${symbol} ${extra}`}</p>
          ) : (
            <p className="list-item-top-name">{`${symbol}${name}`}</p>
          )}
          {!isOpen && <div className="list-item-bg" ref={bgElement}></div>}
          <p className="list-item-top-counter">
            <Counter
              value={count}
              duration={apiIntervalSeconds}
              start={processed}
              changeFunc={handleCounterChange}
            />
          </p>
        </div>

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
