import React, { useCallback } from "react";

export default function useApiError(handlers) {
  console.log("들어옴");
  const handleError = useCallback(
    (error) => {
      let httpStatus = error?.response?.data?.status;
      const errorMsg = error?.response?.data?.error;
      const type = error?.config?.url;

      const handler404 = () => {
        console.log("use 404");
      };

      const handle500 = () => {
        console.log("use 500");
      };

      const defaultHandlers = {
        // common: commonHandler,
        // default: defaultHandler,
        404: handler404,
        500: handle500,
      };

      if (handlers && handlers[httpStatus]) {
        handlers[httpStatus](error);
      } else if (defaultHandlers[httpStatus]) {
        defaultHandlers[httpStatus]();
      } else {
        console.log("!!default!!");
      }
    },
    [handlers]
  );

  return { handleError };
}
