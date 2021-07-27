/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import api from "../services/api";

const useFetch = <T>(
  modifier?: (data: T) => any
): [T, (url: string) => Promise<void>, boolean, boolean, () => void] => {
  const mountedRef = useRef(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const resetData = () => {
    setData(null);
  };

  const getData = async (url: string) => {
    setLoading(true);
    setError(false);
    api.get(url).then((result) => {
      if (!mountedRef.current) return;
      setLoading(false);
      if (!result) {
        setError(true);
      }
      if (modifier) {
        result = modifier(result);
      }
      setData(result);
    });
  };

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return [data, getData, error, loading, resetData];
};

export default useFetch;
