/* eslint-disable react-hooks/exhaustive-deps */
import { IDatasets } from "../types";
import useVisibilityChange from "../../../hooks/useVisibilityChange";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";
import { useEffect } from "react";

// const modifier = (data: any) => {
//   return data;
// };
const useListsData = (
  url: string,
  apiIntervalSeconds: number
): [IDatasets | null, boolean] => {
  const [data, fetch, error] = useFetch(url);
  const [clear, set] = useInterval(fetch, apiIntervalSeconds);

  const handleBackToView = () => {
    fetch();
    set();
  };

  useEffect(() => {
    fetch().then();
  }, []);

  useEffect(() => {
    if (error) {
      clear();
    }
  }, [error]);

  useVisibilityChange(handleBackToView, clear);
  return [data, error];
};

export default useListsData;
