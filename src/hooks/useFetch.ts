/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import api from "../services/api";

const useFetch = (url: string, modifier?: (data: any) => any) => {
  const mountedRef = useRef(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const fetch = async (customUrl?: string) => {
    if (!mountedRef.current) return;
    setLoading(true);
    setError(false);
    let res = await api.get(customUrl || url);
    setLoading(false);
    if (!res) {
      setError(true);
    }
    if (modifier) {
      res = modifier(res);
    }
    setData(res);
  };

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return [data, fetch, error, loading];
};

export default useFetch;
