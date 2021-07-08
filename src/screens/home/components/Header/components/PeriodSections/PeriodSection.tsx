import Counter from "../../../../../../components/Counter";
import { categortiesDictionary } from "../../../../constants";
import { categories } from "../../../../data";
import { DATASET_NAMES, ITopTweets } from "../../../../types";
import Tooltip from "../../../../../../components/Tooltip";
const PeriodSection = ({ element }: { element: ITopTweets }) => {
  const { type, name, count } = element;
  const categoryKey = categortiesDictionary[type];
  const category = categories[categoryKey];
  const isLink = categoryKey === DATASET_NAMES.URLS;
  if (!category) {
    return null;
  }
  return (
    <section className="header-period-sections-element" key={name}>
      <h4 className="header-period-sections-element-title">
        {category.shortName}
      </h4>
      <span className="flex header-period-sections-element-content">
        <img src={category.image} alt="" />

        {isLink ? (
          <a
            className="header-period-sections-element-name"
            href={name}
            target="_blank"
            rel="noreferrer"
          >
            LINK
          </a>
        ) : (
          <>
            <p className="header-period-sections-element-name">{name}</p>
            <Tooltip content={name} />
          </>
        )}
        <p className="header-period-sections-element-count">
          {count.toLocaleString()}
        </p>
      </span>
    </section>
  );
};

export default PeriodSection;
