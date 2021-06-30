import React from "react";
import dataGenerator from "../../../../services/data-generator";
import CountDown from "../CountDown";
import HeaderCounters from "../HeaderCounters";
import TwitterImg from "../../../../assets/images/twitter.png";
import useFetch from "../../hooks/useFetch";
import { PERIOD_ENTITIES_API } from "../../constants";
const Header = () => {
  const [data] = useFetch(PERIOD_ENTITIES_API);
  return (
    <header className="home-header">
      <div className="home-header-top flex">
        <img src={TwitterImg} alt="twitter" />
        <strong>Realtime</strong> <p>DEFI</p> <strong>Twitter mentions</strong>
        on the really important things
      </div>
      <div className="home-header-bottom flex">
        <HeaderCounters
          title="Yesterday's top"
          data={data?.yesterdayTopEntities}
        />
        <CountDown />
        <HeaderCounters title="Weekly top" data={data?.weeklyTopEntities} />
      </div>
    </header>
  );
};

export default Header;
