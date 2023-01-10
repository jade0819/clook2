import React from "react";
import { useQueries } from "@tanstack/react-query";
import { getApi } from "../api/api";
import { useLocationContext } from "../contexts/LocationContext";
import useApiError from "./useApiError";
import { useErrorHandler } from "react-error-boundary";

export default function useWeather(apis, params) {
  const { location } = useLocationContext();
  const handleError = useErrorHandler();

  const errorHandler400 = () => {
    console.log("400 핸들러");
  };

  const errorHandler404 = (error) => {
    console.log("404 핸들러");
    handleError(error, "dd");
  };

  const errorHandler500 = () => {
    console.log("500 핸들러");
  };

  const { handlesError } = useApiError({
    400: errorHandler400,
    404: errorHandler404,
    500: errorHandler500,
  });

  const queryResults = useQueries({
    queries: apis.map((api) => {
      if (api) {
        return {
          queryKey: [api, location],
          queryFn: () => getApi(api, params),
          staleTime: 1000 * 60 * 5,
          // useErrorBoundary: true,
          onError: handlesError,
        };
      }
    }),
  });

  console.log("=======> useWeather.jsx");

  return queryResults;
}
