import { animated } from "@react-spring/web";
import { IDatasetElement } from "../../../../types";
import { JSXElementConstructor, memo } from "react";
import Counter from "../../../../../../components/Counter";
import FlameImg from "../../../../../../assets/images/flame.png";
import useListItemUpdate from "../../../../hooks/useListItemUpdate";
import { INTERVAL_DELAY_SECONDS } from "../../../../constants";

interface IProps {
  style: any;
  item: IDatasetElement;
  isOpen: boolean;
  setActiveElement: () => void;
  symbol: string;
  index: number;
  isNew: boolean;
  ContentComponent: JSXElementConstructor<any>;
}

const handleClassName = (isOpen: boolean, countChanged: boolean) => {
  if (isOpen) {
    return "list-item list-item-open";
  }
  if (countChanged) {
    return "list-item list-item-active";
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
  isNew,
  ContentComponent,
}: IProps) => {
  const { name, count, processed } = item;
  const [updated] = useListItemUpdate(count, index, isNew);
  return (
    <animated.div className="card" style={style}>
      <div className={handleClassName(isOpen, updated)}>
        <figure className="list-item-action" onClick={setActiveElement} />
        <div className="list-item-top">
          <section className="list-item-top-name flex">
            <p>{symbol}</p>
            <p>{name}</p>
          </section>
          <p className="list-item-top-counter">
            <Counter
              value={count}
              duration={INTERVAL_DELAY_SECONDS}
              start={processed}
            />
          </p>
        </div>
        <img src={FlameImg} alt="flame" className="list-item-flame" />
        {isOpen && <ContentComponent item={item} symbol={symbol} />}
      </div>
    </animated.div>
  );
};

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  const isSameNum = prevProps.item.count === nextProps.item.count;
  const isSameProcessed = prevProps.item.processed === nextProps.item.processed;
  const isSameActive = prevProps.isOpen === nextProps.isOpen;
  const isNew = prevProps.isNew === nextProps.isNew;
  return isSameNum && isSameActive && isNew && isSameProcessed;
};

export default memo(ListItem, areEqual);
