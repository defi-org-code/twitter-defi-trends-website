/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
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

interface IProps {
  url: string;
  hideView: boolean;
}

const Period = ({ url, hideView }: IProps) => {
  const [data, getData, error] = useFetch<IUseFetch>();
  useEffect(() => {
    getPeriod();
  }, []);

  const getPeriod = () => {
    getData(url);
  };

  useVisibilityChange(getPeriod);
  const { isMobile } = useContext(ThemeContext);
  return isMobile ? (
    <Mobile data={data} error={error} hideView={hideView} />
  ) : (
    <Desktop error={error} data={data} hideView={hideView} />
  );
};

export default Period;
