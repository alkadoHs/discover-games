import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { CancelTokenSource } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelToken: CancelTokenSource;

    cancelToken = axios.CancelToken.source();
    apiClient
      .get<FetchGameResponse>("/games", { cancelToken: cancelToken.token })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
      });

    return () => {
      if (cancelToken) {
        cancelToken.cancel("The request is cancelled due to component unmount");
      }
    };
  }, []);

  return { games, error };
};

export default useGames;
