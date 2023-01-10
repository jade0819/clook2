import { useQueries } from "@tanstack/react-query";
import { getToptm, getTopspt } from "../api/weatherApi";
import useApiError from "./useApiError";

export default function useWeather(location) {
  const { handleError } = useApiError();

  const results = useQueries({
    queries: [
      {
        queryKey: ["toptm", location],
        queryFn: () => getToptm(),
        staleTime: 1000 * 60 * 5,
        onError: (error) => handleError(error),
      },
      {
        queryKey: ["topspt", location],
        queryFn: () => getTopspt(),
        staleTime: 1000 * 60 * 5,
        onError: (error) => handleError(error),
      },
    ],
  });

  // console.log(results[0].data);
  // console.log(results[1].data);
  console.log("useWeather.jsx");

  return { toptm: results[0], topspt: results[1] };
}
