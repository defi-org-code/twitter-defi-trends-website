import { API_ITEMS_LIMIT, INTERVAL_DELAY_SECONDS } from "../constants/index";
import { useState, useEffect } from "react";
import { IDatasets } from "../types";
import { normalizeEntities } from "../utils";
import dataGenerator from "../../../services/data-generator";
import useVisibilityChange from "../../../hooks/useVisibilityChange";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";

const useListsData = (url: string): [IDatasets | null, boolean, boolean] => {
  const [windowInView] = useVisibilityChange();

  const [data, error, loading, fetchData] = useFetch(url, false);
  const test = () => {
    const res = dataGenerator.createDatasets(4);
    setDatasets(res);
  };
  const [clear, set, reset] = useInterval(fetchData, INTERVAL_DELAY_SECONDS);

  const [dataSets, setDatasets] = useState<any>(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     test();
  //   }, 3000);
  // }, []);
  useEffect(() => {
    if (windowInView) {
      fetchData();
      return set();
    }
    clear();
  }, [windowInView]);

  useEffect(() => {
    if (!data) return;
    const normalized = normalizeEntities(data, API_ITEMS_LIMIT);
    setDatasets(normalized);
  }, [data]);

  return [dataSets, error, false];
};

export default useListsData;
