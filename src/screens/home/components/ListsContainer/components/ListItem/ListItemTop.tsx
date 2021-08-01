import Counter from "../../../../../../components/Counter";
import Tooltip from "../../../../../../components/Tooltip";
import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ANALYTICS_EVENTS } from "../../../../../../services/analytics/types";
import { IDatasetElement, DATASET_TYPES } from "../../../../types";

interface IProps {
  item: IDatasetElement;
  setActiveElement: (item: IDatasetElement) => void;
  symbol: string;
  apiIntervalSeconds: number;
  categoryName: DATASET_TYPES;
  handleCounterChange: () => void;
}

function ListItemTop({
  item,
  setActiveElement,
  symbol,
  apiIntervalSeconds,
  categoryName,
  handleCounterChange,
}: IProps) {
  const { sendEventAndRunAction } = useAnalytics();
  const isUrl = categoryName === DATASET_TYPES.URLS;

  const { name, extra, count, processed } = item;

  const select = () => {
    sendEventAndRunAction.bind(
      null,
      ANALYTICS_EVENTS.TAP_ON_ENTITY,
      categoryName,
      isUrl ? window.open.bind(null, name) : setActiveElement.bind(null, item)
    )();
  };

  return (
    <div className="list-item-top" onClick={!isUrl ? select : () => {}}>
      {isUrl && (
        <Tooltip
          onClick={select}
          content={
            <p className="word-break">
              {symbol} {extra}
            </p>
          }
          btnContent={<div className="list-item-top-tooltip-btn"></div>}
        />
      )}
      <p className="list-item-top-name">{`${symbol} ${
        isUrl ? extra : name
      }`}</p>

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
