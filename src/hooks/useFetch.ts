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
    api.get(customUrl || url).then((res) => {
      if (!mountedRef.current) return;
      setLoading(false);
      if (!res) {
        setError(true);
      }
      if (modifier) {
        res = modifier(res);
      }

      setData(res);
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
