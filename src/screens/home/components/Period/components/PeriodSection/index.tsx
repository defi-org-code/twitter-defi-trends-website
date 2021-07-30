import { categortiesDictionary } from "../../../../constants";
import { categories } from "../../../../data";
import { DATASET_TYPES, IPeriodData } from "../../../../types";
import Tooltip from "../../../../../../components/Tooltip";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";

const PeriodSection = ({ element }: { element: IPeriodData }) => {
  const { isMobile } = useContext(ThemeContext);
  const container = useRef<HTMLDivElement>(null);

  const { type, name, count, extra } = element;
  const categoryKey = categortiesDictionary[type];
  const category = categories[categoryKey];
  const isLink = categoryKey === DATASET_TYPES.URLS;

  return (
    <section className="period-element" ref={container}>
      <h4 className="period-element-title">{category.shortName}</h4>
      <span className="flex period-element-content">
        <Tooltip
          onClick={() => isLink && window.open(extra)}
          className="period-element-tooltip"
          content={
            isLink ? (
              <p className="word-break">
                {category.symbol} {extra}
              </p>
            ) : (
              `${category.symbol} ${name}`
            )
          }
          btnContent={
            <p className="period-element-name">
              <img src={category.image} alt="" />
              {isLink && isMobile ? name : isLink ? "URL" : name}
            </p>
          }
        />

        <p className="period-element-count">{count.toLocaleString()}</p>
      </span>
    </section>
  );
};

export default PeriodSection;
