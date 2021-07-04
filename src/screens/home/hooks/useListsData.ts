import {
  API_ITEMS_LIMIT,
  GET_TWEETS_API_URL,
  INTERVAL_DELAY_SECONDS,
} from "../constants/index";
import { useState, useEffect } from "react";
import { IDatasets } from "../types";
import { normalizeEntities } from "../utils";
import dataGenerator from "../../../services/data-generator";
import useInterval from "../hooks/useInterval";
import useFetch from "../hooks/useFetch";

const useListsData = (
  url: string,
  windowInView: boolean
): [IDatasets | null, boolean, boolean, (newUrl: string) => void] => {
  const [endpointUrl, setEndpointUrl] = useState(url);
  const [data, error, loading, fetchData] = useFetch(endpointUrl, true);

  const [clear, set, reset] = useInterval(fetchData, INTERVAL_DELAY_SECONDS);

  const [dataSets, setDatasets] = useState<any>(null);

  useEffect(() => {
    if (!windowInView) {
      clear();
      return;
    }
    set();
  }, [windowInView]);

  const setNewEndpointUrl = (newUrl: string) => {
    clear();
    setEndpointUrl(newUrl);
    fetchData(newUrl);
    reset();
  };

  useEffect(() => {
    if (!data) return;
    const normalized = normalizeEntities(data, API_ITEMS_LIMIT);
    setDatasets(normalized);
  }, [data]);

  useEffect(() => {
    set();
  }, []);

  return [dataSets, error, false, setNewEndpointUrl];
};

export default useListsData;
