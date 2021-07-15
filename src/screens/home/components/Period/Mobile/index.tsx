/* eslint-disable react-hooks/exhaustive-deps */
import CountDown from "../../CountDown";
import ErrorHandling from "../../../../../components/ErrorHandling";
import PeriodSections from "../components/PeriodSections";
import { IPeriodData } from "../../../types";
import { useRef, useState } from "react";
import useClickOutside from "../../../../../hooks/useClickOutside";

interface IData {
  yesterdayTopEntities: IPeriodData[];
  weeklyTopEntities: IPeriodData[];
}

interface IProps {
  data: IData;
  error: boolean;
}

const PeriodMobile = ({ data, error }: IProps) => {
  const [showWeekly, setShowWeekly] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const toggle = () => {
    setShowMenu(!showMenu);
  };

  const selectWeekly = () => {
    setShowWeekly(false);
    setShowMenu(false);
  };

  const selectYesterday = () => {
    setShowWeekly(true);
    setShowMenu(false);
  };

  useClickOutside(container, () => setShowMenu(false));
  return (
    <div className="period period-mobile flex">
      {showMenu && (
        <div className="period-mobile-menu" ref={container}>
          {showWeekly ? (
            <section onClick={selectWeekly}>Yesterday's top </section>
          ) : (
            <section onClick={selectYesterday}>Weekly top</section>
          )}
        </div>
      )}
      {showWeekly ? (
        <ErrorHandling showError={error} errorText="Fetch failed">
          <PeriodSections
            title="Weekly top"
            data={data?.weeklyTopEntities}
            toggle={toggle}
          />
        </ErrorHandling>
      ) : (
        <ErrorHandling showError={error} errorText="Fetch failed">
          <PeriodSections
            toggle={toggle}
            title="Yesterday's top"
            data={data?.yesterdayTopEntities}
          />
        </ErrorHandling>
      )}

      <CountDown />
    </div>
  );
};

export default PeriodMobile;
