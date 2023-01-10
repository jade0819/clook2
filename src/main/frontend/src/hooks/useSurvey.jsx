import React from "react";
import { useMutation } from "@tanstack/react-query";
import { getApi } from "../api/api";

export default function useSurvey() {
  const addSurvey = useMutation((params) => getApi("survey", params), {
    useErrorBoundary: false,
  });

  console.log("=======> useSurvey.jsx");

  return addSurvey;
}
