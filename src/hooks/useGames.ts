import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { CancelTokenSource } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    let cancelToken: CancelTokenSource;

    cancelToken = axios.CancelToken.source();
    apiClient
      .get<FetchGameResponse>("/games", { cancelToken: cancelToken.token })
      .then((res) => {
        setGames(res.data.results);
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

  return { games, error, isLoading };
};

export default useGames;
