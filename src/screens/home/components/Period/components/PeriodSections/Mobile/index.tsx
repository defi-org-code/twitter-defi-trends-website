import { IPeriodData } from "../../../../../types/index";
import PeriodSection from "../../PeriodSection";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";

interface IProps {
  data: IPeriodData[];
  title: string;
  toggle?: () => void;
  selectedFromParent?: boolean;
}

const PeriodSectionsMobile = ({
  data,
  title,
  toggle,
  selectedFromParent,
}: IProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (selectedFromParent) {
      setActive(true);
    }
  }, [selectedFromParent]);

  const handleActive = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className="period-sections-mobile">
      <section className="period-sections-mobile-header flex">
        <div className="flex">
          <h5>{title}</h5>
          <aside
            onClick={toggle}
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
              return <PeriodSection key={element.name} element={element} />;
            })}
        </div>
      </AnimateHeight>
    </div>
  );
};

export default PeriodSectionsMobile;
