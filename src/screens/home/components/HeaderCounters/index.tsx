import Counter from "../Counter";
import { IHeaderCounterData, ITopTweets } from "../../types/index";
import { categories, categortyTypesDictionary } from "../../constants";

interface IProps {
  data: ITopTweets[];
  title: string;
}

const createCounterElement = (element: ITopTweets) => {
  try {
    const { type, name, count } = element;
    const categoryKey = categortyTypesDictionary[type];
    const category = categories[categoryKey];
    return (
      <section className="header-counters-element" key={name}>
        <h4 className="header-counters-element-title">{category.shortName}</h4>
        <span className="flex">
          <img src={category.image} alt="" />
          <p className="header-counters-element-name"> {name}</p>
          <p className="header-counters-element-count">
            <Counter value={count} animationOnStart />
          </p>
        </span>
      </section>
    );
  } catch (error) {
    return null;
  }
};

const HeaderCounters = ({ data, title }: IProps) => {
  return (
    <div className="header-counters">
      <h5 className="header-counters-title">{title}</h5>
      <div className="flex">
        {data &&
          data.map((element: ITopTweets) => {
            return createCounterElement(element);
          })}
      </div>
    </div>
  );
};

export default HeaderCounters;
