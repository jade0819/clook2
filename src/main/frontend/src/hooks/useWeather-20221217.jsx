import { useQueries } from "@tanstack/react-query";
import { getApi } from "../api/api";
import { useErrorHandler } from "react-error-boundary";
import { useEffect, useState } from "react";
import { useLocationContext } from "../contexts/LocationContext";

export default function useWeather(apis, location, params) {
  const { isSucc, updateSucc } = useLocationContext();
  const handleError = useErrorHandler();
  const [error, setError] = useState(null);

  console.log(`isSucc: ${isSucc}`);
  console.log(`location: ${location}`);

  const queryResults = useQueries({
    queries: apis.map((api) => {
      if (api) {
        return {
          queryKey: [api, location],
          queryFn: () => getApi(api, params),
          // staleTime: 1000 * 60 * 5,
          onError: (e) => {
            setError(e);
          },
          // enabled: !!isSucc,
        };
      }
    }),
  });

  useEffect(() => {
    if (error) {
      handleError(error);
    }
  }, [error]);

  useEffect(() => {
    const succAll = queryResults.every((result) => (result.status = "success"));

    if (succAll) {
      updateSucc(true);
    }
  }, [queryResults]);

  console.log("=======> useWeather.jsx");
  return queryResults;
}
