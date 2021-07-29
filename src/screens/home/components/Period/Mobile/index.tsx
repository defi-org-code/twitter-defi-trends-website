/* eslint-disable react-hooks/exhaustive-deps */
import CountDown from "../../CountDown";
import ErrorHandling from "../../../../../components/ErrorHandling";
import PeriodSections from "../components/PeriodSections";
import { IPeriodData, PERIODS } from "../../../types";
import { useState } from "react";

interface IData {
  yesterdayTopEntities: IPeriodData[];
  weeklyTopEntities: IPeriodData[];
}

interface IProps {
  data: IData;
  error: boolean;
  hideView: boolean;
}

const PeriodMobile = ({ data, error, hideView }: IProps) => {
  const [periodSelected, setPeriodSelected] = useState(PERIODS.WEEK);

  const selectPeriod = (period: PERIODS) => {
    setPeriodSelected(period);
  };

  return (
    <div className="period period-mobile flex">
      {periodSelected === PERIODS.WEEK ? (
        <ErrorHandling showError={error} errorText="Fetch failed">
          <PeriodSections
            menuValue={PERIODS.YESTERDAY}
            menuText="Yesterday's top"
            title="Weekly top"
            data={data?.weeklyTopEntities}
            selectPeriod={selectPeriod}
            hideView={hideView}
          />
        </ErrorHandling>
      ) : (
        <ErrorHandling showError={error} errorText="Fetch failed">
          <PeriodSections
            menuValue={PERIODS.WEEK}
            menuText="Weekly top"
            selectPeriod={selectPeriod}
            title="Yesterday's top"
            data={data?.yesterdayTopEntities}
            hideView={hideView}
          />
        </ErrorHandling>
      )}

      <CountDown />
    </div>
  );
};

export default PeriodMobile;
