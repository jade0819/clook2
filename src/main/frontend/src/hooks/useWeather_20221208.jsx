import { useQuery } from "@tanstack/react-query";
import { getToptm, getTopspt } from "../api/weatherApi";
import useApiError from "./useApiError";

export default function useWeather(location) {
  const { handleError } = useApiError();

  const toptmQuery = useQuery(["toptm", location], () => getToptm(), {
    staleTime: 1000 * 60 * 5,
    // enabled: locationQuery.isSuccess,
    onError: (error) => handleError(error),
  });

  const topsptQuery = useQuery(["topspt", location], () => getTopspt(), {
    staleTime: 1000 * 60 * 5,
    // onError: (error) => console.error(`Someting ...: ${error.message}`),
    onError: (error) => handleError(error),
  });

  // let isSuccessAll = toptmQuery.isSuccess && topsptQuery.isSuccess;
  // let errorAll = toptmQuery.isError || topsptQuery.isError;
  let isLoadingToptm = toptmQuery.isLoading;
  let isLoadingTopspt = topsptQuery.isLoading;

  return { toptmQuery, topsptQuery, isLoadingToptm, isLoadingTopspt };
}
