/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import api from "../services/api";

const useFetch = <T>(
  url: string,
  modifier?: (data: T) => any
): [T, (customUrl?: string) => Promise<void>, boolean, boolean] => {
  const mountedRef = useRef(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const fetch = async (customUrl?: string) => {
    setLoading(true);
    setError(false);
    api.get(customUrl || url).then((result) => {
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

  return [data, fetch, error, loading];
};

export default useFetch;
