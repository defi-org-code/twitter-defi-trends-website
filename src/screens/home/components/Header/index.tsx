import React from "react";
import CountDown from "../CountDown";
import TwitterImg from "../../../../assets/images/twitter.png";
import useFetch from "../../../../hooks/useFetch";
import { PERIOD_ENTITIES_API } from "../../constants";
import ErrorHandling from "../../../../components/ErrorHandling";
import ThemeToggle from "../../../../components/ThemeToggle";
import useVisibilityChange from "../../../../hooks/useVisibilityChange";
import PeriodSections from "./components/PeriodSections";
const Header = () => {
  const [data, error, _loading, fetchData] = useFetch(
    PERIOD_ENTITIES_API,
    true
  );
  useVisibilityChange(fetchData);
  return (
    <header className="home-header">
      <div className="home-header-top flex">
        <img src={TwitterImg} alt="twitter" />
        <span className="flex">
          <strong>Realtime</strong> <p>DEFI</p>
          <strong>Twitter mentions</strong>
          on the really important things
        </span>
        <ThemeToggle />
      </div>
      <div className="home-header-bottom flex">
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
    </header>
  );
};

export default Header;
