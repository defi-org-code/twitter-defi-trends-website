/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import api from "../services/api";

const useFetch = (url: string, fecthOnLoad?: boolean) => {
  const mountedRef = useRef(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const fetchData = async (customUrl?: string) => {
    if (!mountedRef.current) return;
    setLoading(true);
    setError(false);
    const res = await api.get(customUrl || url);
    setLoading(false);
    if (!res) {
      setError(true);
    }
    setData(res);
  };

  useEffect(() => {
    if (fecthOnLoad) {
      fetchData();
    }
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return [data, error, loading, fetchData];
};

export default useFetch;
