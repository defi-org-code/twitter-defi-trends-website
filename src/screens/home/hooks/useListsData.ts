/* eslint-disable react-hooks/exhaustive-deps */
import { IDatasets } from "../types";
import useVisibilityChange from "../../../hooks/useVisibilityChange";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";
import { useEffect } from "react";

const useListsData = (
  url: string,
  apiIntervalSeconds: number
): [IDatasets | null, boolean] => {
  const [data, getData, error] = useFetch<IDatasets>();

  useEffect(() => {
    if (error) {
      clear();
    }
  }, [error]);

  const getListData = () => {
    getData(url).then(() => {
      set();
    });
  };

  useEffect(() => {
    getListData();
  }, []);

  const [clear, set] = useInterval(getData.bind(null, url), apiIntervalSeconds);

  useVisibilityChange(getListData, clear);

  return [data, error];
};

export default useListsData;
