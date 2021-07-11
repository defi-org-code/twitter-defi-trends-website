/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import CountDown from "../CountDown";
import useFetch from "../../../../hooks/useFetch";
import { PERIOD_ENTITIES_API } from "../../constants";
import ErrorHandling from "../../../../components/ErrorHandling";
import useVisibilityChange from "../../../../hooks/useVisibilityChange";
import PeriodSections from "./components/PeriodSections";
const Period = () => {
  const [data, fetch, error] = useFetch(PERIOD_ENTITIES_API);
  useEffect(() => {
    fetch();
  }, []);

  useVisibilityChange(fetch);
  return (
    <div className="home-period flex">
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