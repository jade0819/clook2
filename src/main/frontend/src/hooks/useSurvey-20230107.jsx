import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getApi } from "../api/api";

export default function useSurvey() {
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);

  const addSurvey = useMutation((params) => getApi("survey", params), {
    onSuccess: () => {
      queryClient.invalidateQueries("survey");
    },
    onError: (e) => {
      setError(e);
    },
  });

  console.log("=======> useSurvey.jsx");

  return { addSurvey, error };
  // return addSurvey;
}
