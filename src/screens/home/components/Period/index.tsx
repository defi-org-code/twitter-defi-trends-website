/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import CountDown from "../CountDown";
import useFetch from "../../../../hooks/useFetch";
import ErrorHandling from "../../../../components/ErrorHandling";
import useVisibilityChange from "../../../../hooks/useVisibilityChange";
import PeriodSections from "./components/PeriodSections";
import { IPeriodData } from "../../types";

interface IUseFetch {
  yesterdayTopEntities: IPeriodData[];
  weeklyTopEntities: IPeriodData[];
}
declare var process: {
  env: {
    REACT_APP_PERIOD_ENTITIES_API: string;
  };
};

const Period = () => {
  const [data, fetch, error] = useFetch<IUseFetch>(
    process.env.REACT_APP_PERIOD_ENTITIES_API
  );
  useEffect(() => {
    fetch();
  }, []);

  useVisibilityChange(fetch);
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
