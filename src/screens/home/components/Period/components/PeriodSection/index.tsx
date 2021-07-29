import { categortiesDictionary } from "../../../../constants";
import { categories } from "../../../../data";
import { DATASET_TYPES, IPeriodData } from "../../../../types";
import Tooltip from "../../../../../../components/Tooltip";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import useClickOutside from "../../../../../../hooks/useClickOutside";

const PeriodSection = ({ element }: { element: IPeriodData }) => {
  const { isMobile } = useContext(ThemeContext);
  const container = useRef<HTMLDivElement>(null);

  const [showTooltip, setShowTooltip] = useState(false);
  useClickOutside(
    container,
    isMobile ? () => setShowTooltip(false) : undefined
  );
  const { type, name, count, extra } = element;
  const categoryKey = categortiesDictionary[type];
  const category = categories[categoryKey];
  const isLink = categoryKey === DATASET_TYPES.URLS;

  const handleLinkClick = (url: string) => {
    if (isMobile) {
      handleMobileLinkClick(url);
      return;
    }
    window.open(url);
  };

  const handleMobileLinkClick = (url: string) => {
    if (!showTooltip) {
      setShowTooltip(true);
      return;
    }
    setShowTooltip(false);
    window.open(url);
  };

  return (
    <section className="period-element" ref={container}>
      <h4 className="period-element-title">{category.shortName}</h4>
      <span className="flex period-element-content">
        <Tooltip
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
            <p
              className="period-element-name"
              onClick={() => isLink && handleLinkClick(name)}
            >
              <img src={category.image} alt="" />
              {isLink ? "LINK" : name}
            </p>
          }
        />

        <p className="period-element-count">{count.toLocaleString()}</p>
      </span>
    </section>
  );
};

export default PeriodSection;
