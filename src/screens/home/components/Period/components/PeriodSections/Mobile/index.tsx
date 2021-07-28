import { IPeriodData, PERIODS } from "../../../../../types/index";
import PeriodSection from "../../PeriodSection";
import { useRef, useState } from "react";
import AnimateHeight from "react-animate-height";
import useAnalytics from "../../../../../../../hooks/useAnalytics";
import useClickOutside from "../../../../../../../hooks/useClickOutside";
import { ANALYTICS_EVENTS } from "../../../../../../../services/analytics/types";

interface IProps {
  data: IPeriodData[];
  title: string;
  selectPeriod?: (value: PERIODS) => void;
  menuValue?: PERIODS;
  menuText?: string;
}

const PeriodSectionsMobile = ({
  data,
  title,
  selectPeriod,
  menuValue,
  menuText,
}: IProps) => {
  const { sendEventAndRunAction } = useAnalytics();
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  useClickOutside(container, () => setShowMenu(false));

  const handleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const select = () => {
    if (!menuValue) return;
    selectPeriod?.(menuValue);
    setShowMenu(false);
    setActive(true);
  };

  return (
    <div className="period-sections-mobile">
      {menuValue && showMenu && (
        <div
          className="period-mobile-menu"
          ref={container}
          onClick={sendEventAndRunAction.bind(
            null,
            ANALYTICS_EVENTS.TAP_ON_PERIOD_VIEW,
            menuValue,
            select
          )}
        >
          {menuText}
        </div>
      )}
      <section className="period-sections-mobile-header flex">
        <div className="flex">
          <h5>{title}</h5>
          <aside
            onClick={() => setShowMenu(true)}
            className="period-sections-mobile-toggle"
          ></aside>
        </div>
        {data && (
          <button onClick={handleActive}>{active ? "X Close" : "View"}</button>
        )}
      </section>
      <AnimateHeight duration={400} height={active ? "auto" : 0}>
        <div className="flex period-sections-mobile-list">
          {data &&
            data.map((element: IPeriodData) => {
              return <PeriodSection key={element.type} element={element} />;
            })}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default PeriodSectionsMobile;
