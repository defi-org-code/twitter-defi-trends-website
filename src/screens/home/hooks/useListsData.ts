import { IDatasets } from "../types";
import useVisibilityChange from "../../../hooks/useVisibilityChange";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";
import { useEffect } from "react";

const useListsData = (
  url: string,
  apiIntervalSeconds: number
): [IDatasets | null, boolean] => {
  const [data, error, _loading, fetchData] = useFetch(url, true);
  const [clear, set] = useInterval(fetchData, apiIntervalSeconds);

  const getData = () => {
    fetchData();
    set();
  };

  useEffect(() => {
    if (error) {
      clear();
    }
  }, [error]);

  useVisibilityChange(getData, clear);

  return [data, error];
};

export default useListsData;
