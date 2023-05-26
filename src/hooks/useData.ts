import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { CancelTokenSource } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    let cancelToken: CancelTokenSource;

    cancelToken = axios.CancelToken.source();
    apiClient
      .get<FetchResponse<T>>(endpoint, { cancelToken: cancelToken.token })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      if (cancelToken) {
        cancelToken.cancel("The request is cancelled due to component unmount");
      }
    };
  }, []);

  return { data, error, isLoading };
};

export default useData;
