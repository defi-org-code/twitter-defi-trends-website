/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import useVisibilityChange from "../../../../hooks/useVisibilityChange";
import useFetch from "../../../../hooks/useFetch";
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
  const { isMobile } = useContext(ThemeContext);
  return isMobile ? (
    <Mobile data={data} error={error} />
  ) : (
    <Desktop error={error} data={data} />
  );
};

export default Period;
