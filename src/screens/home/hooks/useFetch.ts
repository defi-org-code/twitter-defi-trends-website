import React, { useEffect, useState } from "react";
import api from "../../../services/api";

const useFetch = (url: string) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const fetchData = async () => {
    const res = await api.get(url);
    setLoading(false);
    if (!res) {
      setError(true);
    }
    setData(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [data, error, loading];
};

export default useFetch;
