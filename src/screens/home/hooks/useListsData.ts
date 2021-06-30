import {
  API_ITEMS_LIMIT,
  GET_TWEETS_API_URL,
  INTERVAL_DELAY_SECONDS,
} from "../constants/index";
import { useState, useEffect, useRef } from "react";
import api from "../../../services/api";
import { IDatasets } from "../types";
import { normalizeEntities } from "../utils";

const useListsData = (): [IDatasets | null, boolean, boolean] => {
  const [dataSets, setDatasets] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let t = useRef<any>(null);

  const getData = async () => {
    const result = await api.get(GET_TWEETS_API_URL);
    setIsLoading(false);
    // const result = await dataGenerator.createDatasets(4);
    if (!result) {
      return setIsError(true);
    }
    const normalized = normalizeEntities(result, API_ITEMS_LIMIT);
    setDatasets(normalized);
  };

  const setDatasetsInterval = () => {
    const interval = setInterval(() => {
      getData();
    }, INTERVAL_DELAY_SECONDS * 1000);
    t.current = interval;
  };

  useEffect(() => {
    if (!dataSets) {
      getData();
    }

    setDatasetsInterval();
    return () => clearInterval(t.current);
  }, []);

  return [dataSets, isError, isLoading];
};

export default useListsData;
