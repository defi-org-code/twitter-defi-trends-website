import Counter from "../../../../../../components/Counter";
import { categortiesDictionary } from "../../../../constants";
import { categories } from "../../../../data";
import { DATASET_NAMES, ITopTweets } from "../../../../types";
import Tooltip from "../../../../../../components/Tooltip";
const HeaderCounter = ({ element }: { element: ITopTweets }) => {
  const { type, name, count } = element;
  const categoryKey = categortiesDictionary[type];
  const category = categories[categoryKey];
  const isLink = categoryKey === DATASET_NAMES.URLS;
  if (!category) {
    return null;
  }
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
          <>
            <p className="home-header-counters-element-name">{name}</p>
            <Tooltip content={name} />
          </>
        )}
        <p className="home-header-counters-element-count">
          {count.toLocaleString()}
        </p>
      </span>
    </section>
  );
};

export default HeaderCounter;
