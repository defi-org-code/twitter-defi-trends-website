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
}

const Period = ({ data, error }: IProps) => {
  return (
    <div className="period flex">
      <ErrorHandling showError={error} errorText="Fetch failed">
        <PeriodSections
          title="Yesterday's top"
          data={data?.yesterdayTopEntities}
        />
      </ErrorHandling>
      <CountDown />
      <ErrorHandling showError={error} errorText="Fetch failed">
        <PeriodSections title="Weekly top" data={data?.weeklyTopEntities} />
      </ErrorHandling>
    </div>
  );
};

export default Period;
