import { INTERVAL_DELAY_SECONDS } from "../constants/index";
import { useState, useEffect } from "react";
import { IDatasets } from "../types";
import useVisibilityChange from "../../../hooks/useVisibilityChange";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";

const useListsData = (url: string): [IDatasets | null, boolean, boolean] => {
  const [data, error, loading, fetchData] = useFetch(url, false);
  const [clear, set, reset] = useInterval(fetchData, INTERVAL_DELAY_SECONDS);
  const [dataSets, setDatasets] = useState<any>(null);

  const getData = () => {
    fetchData();
    set();
  };

  useVisibilityChange(getData, clear);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!data) return;
    setDatasets(data);
  }, [data]);

  return [dataSets, error, false];
};

export default useListsData;
