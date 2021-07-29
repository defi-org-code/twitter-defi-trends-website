/* eslint-disable react-hooks/exhaustive-deps */
import CountDown from "../../CountDown";
import ErrorHandling from "../../../../../components/ErrorHandling";
import PeriodSections from "../components/PeriodSections";
import { IPeriodData } from "../../../types";

interface IData {
  yesterdayTopEntities: IPeriodData[];
  weeklyTopEntities: IPeriodData[];
}

interface IProps {
  data: IData;
  error: boolean;
  hideView: boolean;
}

const Period = ({ data, error, hideView }: IProps) => {
  return (
    <div className="period flex">
      <ErrorHandling showError={error} errorText="Fetch failed">
        <PeriodSections
          hideView={hideView}
          title="Yesterday's top"
          data={data?.yesterdayTopEntities}
        />
      </ErrorHandling>
      <CountDown />
      <ErrorHandling showError={error} errorText="Fetch failed">
        <PeriodSections
          title="Weekly top"
          data={data?.weeklyTopEntities}
          hideView={hideView}
        />
      </ErrorHandling>
    </div>
  );
};

export default Period;
