import React, { useEffect, useState } from "react";
import api from "../../../services/api";

const useFetch = (url: string, fecthOnLoad?: boolean) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const fetchData = async (customUrl?: string) => {
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
  }, []);

  return [data, error, loading, fetchData];
};

export default useFetch;
