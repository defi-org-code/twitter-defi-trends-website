import { useRef } from "react";
import Counter from "../../../../../../components/Counter";
import Tooltip from "../../../../../../components/Tooltip";
import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ANALYTICS_EVENTS } from "../../../../../../services/analytics/types";
import { IDatasetElement, DATASET_TYPES } from "../../../../types";
import useBackground from "./useBackground";

interface IProps {
  item: IDatasetElement;
  isOpen: boolean;
  handleSelect: (item: IDatasetElement) => void;
  symbol: string;
  apiIntervalSeconds: number;
  categoryName: DATASET_TYPES;
  isUrl: boolean;
}

function ListItemTop({
  item,
  handleSelect,
  isOpen,
  symbol,
  apiIntervalSeconds,
  categoryName,
  isUrl,
}: IProps) {
  const { sendEventAndRunAction } = useAnalytics();
  const bgElement = useRef<HTMLDivElement>(null);

  const [handleCounterChange] = useBackground(bgElement);

  const { name, extra, count, processed } = item;
  return (
    <div
      className="list-item-top"
      onClick={sendEventAndRunAction.bind(
        null,
        ANALYTICS_EVENTS.TAP_ON_ENTITY,
        categoryName,
        handleSelect.bind(null, item)
      )}
    >
      {isUrl && (
        <Tooltip
          content={
            <p className="word-break">
              {symbol} {extra}
            </p>
          }
          btnContent={<div className="list-item-top-tooltip-btn"></div>}
        />
      )}
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
  );
}

export default ListItemTop;
