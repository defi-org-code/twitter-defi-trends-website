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

  const returnTooltip = (content: string) => {
    return isMobile ? (
      <Tooltip content={content} style={{ opacity: showTooltip ? 1 : 0 }} />
    ) : (
      <Tooltip content={content} />
    );
  };

  return (
    <section className="period-element" ref={container}>
      <h4 className="period-element-title">{category.shortName}</h4>
      <span className="flex period-element-content">
        {isLink ? (
          <>
            <p
              className="period-element-name"
              onClick={() => handleLinkClick(name)}
            >
              <img src={category.image} alt="" />
              LINK
            </p>
            {returnTooltip(`${category.symbol} ${extra}`)}
          </>
        ) : (
          <>
            <img src={category.image} alt="" />
            <p className="period-element-name">{name}</p>
            {returnTooltip(`${category.symbol} ${name}`)}
          </>
        )}
        <p className="period-element-count">{count.toLocaleString()}</p>
      </span>
    </section>
  );
};

export default PeriodSection;
