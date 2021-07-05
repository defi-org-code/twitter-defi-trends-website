import Counter from "../Counter";
import { DATASET_NAMES, ITopTweets } from "../../types/index";
import { categories, categortiesDictionary } from "../../constants";

interface IProps {
  data: ITopTweets[];
  title: string;
}

const HeaderCounter = ({ element }: { element: ITopTweets }) => {
  try {
    const { type, name, count } = element;
    const categoryKey = categortiesDictionary[type];
    const category = categories[categoryKey];
    const isLink = categoryKey === DATASET_NAMES.URLS;
    return (
      <section className="home-header-counters-element" key={name}>
        <h4 className="home-header-counters-element-title">
          {category.shortName}
        </h4>
        <span className="flex">
          <img src={category.image} alt="" />

          {isLink ? (
            <a
              className="home-header-counters-element-name"
              href={name}
              target="_blank"
              rel="noreferrer"
            >
              LINK
            </a>
          ) : (
            <p className="home-header-counters-element-name">{name}</p>
          )}
          <p className="home-header-counters-element-count">
            <Counter value={count} />
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
    <div className="home-header-counters">
      <h5 className="home-header-counters-title">{title}</h5>
      <div className="flex">
        {data &&
          data.map((element: ITopTweets) => {
            return <HeaderCounter key={element.name} element={element} />;
          })}
      </div>
    </div>
  );
};

export default HeaderCounters;
