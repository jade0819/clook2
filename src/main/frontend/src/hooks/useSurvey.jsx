import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getApi } from "../api/api";

export default function useSurvey() {
  const queryClient = useQueryClient();

  const addSurvey = useMutation((params) => getApi("survey", params), {
    onSuccess: () => {
      queryClient.invalidateQueries("survey");
    },
  });

  console.log("=======> useSurvey.jsx");

  return addSurvey;
}
