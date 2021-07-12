import { categortiesDictionary } from "../../../../constants";
import { categories } from "../../../../data";
import { DATASET_TYPES, IPeriodData } from "../../../../types";
import Tooltip from "../../../../../../components/Tooltip";
const PeriodSection = ({ element }: { element: IPeriodData }) => {
  const { type, name, count } = element;
  const categoryKey = categortiesDictionary[type];
  const category = categories[categoryKey];
  const isLink = categoryKey === DATASET_TYPES.URLS;
  if (!category) {
    return null;
  }
  return (
    <section className="period-element" key={name}>
      <h4 className="period-element-title">{category.shortName}</h4>
      <span className="flex period-element-content">
        <img src={category.image} alt="" />

        {isLink ? (
          <a
            className="period-element-name"
            href={name}
            target="_blank"
            rel="noreferrer"
          >
            LINK
          </a>
        ) : (
          <>
            <p className="period-element-name">{name}</p>
            <Tooltip content={name} />
          </>
        )}
        <p className="period-element-count">{count.toLocaleString()}</p>
      </span>
    </section>
  );
};

export default PeriodSection;
