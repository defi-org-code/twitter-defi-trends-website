import { animated } from "@react-spring/web";
import { IDatasetElement } from "../../../../types";
import { JSXElementConstructor, memo } from "react";
import Counter from "../../../../../../components/Counter";
import useListItemUpdate from "../../../../hooks/useListItemUpdate";
import { INTERVAL_DELAY_SECONDS } from "../../../../constants";
import LottieAnimation from "../../../../../../components/LottieAnimation";
import { lottieAnimations } from "../../../../../../constans";

import fireGif from "../../../../../../assets/images/gif/fire.gif";
interface IProps {
  style: any;
  item: IDatasetElement;
  isOpen: boolean;
  setActiveElement: () => void;
  symbol: string;
  index: number;
  isNew: boolean;
  ContentComponent: JSXElementConstructor<any>;
  countForAnimation: number;
  positionsJumpForAnimation: number;
  apiIntervalSeconds: number;
  isUrl: boolean;
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
  isNew,
  ContentComponent,
  countForAnimation,
  positionsJumpForAnimation,
  apiIntervalSeconds,
  isUrl,
}: IProps) => {
  const { name, count, processed } = item;
  const [updated] = useListItemUpdate(
    count,
    processed,
    countForAnimation,
    index,
    positionsJumpForAnimation,
    isNew
  );

  const handleClick = () => {
    if (isUrl) {
      return window.open(name);
    }
    setActiveElement();
  };

  return (
    <animated.div className="card" style={style}>
      <div className={handleClassName(isOpen)}>
        <figure className="list-item-action" onClick={handleClick} />
        <div className="list-item-top">
          <section className="list-item-top-name flex">
            <p>{symbol}</p>
            <p>{name}</p>
          </section>

          <p className="list-item-top-counter">
            <Counter
              value={count}
              duration={apiIntervalSeconds}
              start={processed}
            />
          </p>
        </div>
        {/* {updated && <LottieAnimation animation={lottieAnimations.fire} />} */}
        {updated && <img alt="fire" src={fireGif} />}
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
