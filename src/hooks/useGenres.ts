import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    let cancelToken: CancelTokenSource;

    cancelToken = axios.CancelToken.source();
    apiClient
      .get<FetchGenreResponse>("/genres", { cancelToken: cancelToken.token })
      .then((res) => {
        setGenres(res.data.results);
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

  return { genres, error, isLoading };
};

export default useGenres;
