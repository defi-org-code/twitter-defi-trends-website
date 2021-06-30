import { animated } from "@react-spring/web";
import { IDatasetElement } from "../../../types";
import { memo } from "react";
import Counter from "../../Counter";
import FlameImg from "../../../../../assets/images/flame.png";
import ListItemTweets from "../ListItemTweets";
import useCount from "../../../hooks/useListItemRefs";
import { INTERVAL_DELAY_SECONDS } from "../../../constants";

interface IProps {
  style: any;
  item: IDatasetElement;
  isOpen: boolean;
  setActiveElement: () => void;
  symbol: string;
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
}: IProps) => {
  const { name, count } = item;
  const [countChanged] = useCount(count);

  return (
    <animated.div className="card" style={style}>
      <div className={handleClassName(isOpen, countChanged)}>
        <figure className="list-item-action" onClick={setActiveElement} />
        <div className="list-item-top">
          <section className="list-item-top-name flex">
            <p>{symbol}</p>
            <p>{name}</p>
          </section>
          <p className="list-item-top-counter">
            <Counter value={count} duration={INTERVAL_DELAY_SECONDS} />
          </p>
        </div>
        <img src={FlameImg} alt="flame" className="list-item-flame" />
        {isOpen && <ListItemTweets />}
      </div>
    </animated.div>
  );
};

const areEqual = (prevProps: IProps, nextProps: IProps) => {
  const isSameNum = prevProps.item.count === nextProps.item.count;
  const isSameActive = prevProps.isOpen === nextProps.isOpen;
  return isSameNum && isSameActive;
};

export default memo(ListItem, areEqual);
