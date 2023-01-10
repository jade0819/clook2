import { useQueries } from "@tanstack/react-query";
import { setLocation, getToptm, getTopspt } from "../api/weatherApi";

export default function useWeather2(address) {
  const results = useQueries({
    queries: [
      {
        queryKey: ["location"],
        queryFn: () => setLocation(address),
        staleTime: 1000 * 60 * 60,
      },
      {
        queryKey: ["toptm"],
        queryFn: () => getToptm(),
        staleTime: 1000 * 60 * 60,
      },
      {
        queryKey: ["topspt"],
        queryFn: () => getTopspt(),
        staleTime: 1000 * 60 * 60,
      },
    ],
  });

  const locationQuery = results[0];
  const toptmQuery = results[1];
  const topsptQuery = results[2];
  const isSuccessAll =
    locationQuery.isSuccess && toptmQuery.isSuccess && topsptQuery.isSuccess;

  return { locationQuery, toptmQuery, topsptQuery, isSuccessAll };
}
