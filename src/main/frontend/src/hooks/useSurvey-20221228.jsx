import { useMutation } from "@tanstack/react-query";
import { getApi } from "../api/api";

export default function useSurvey(params) {
  const addSurvey = useMutation(() => getApi("survey", params), {
    onSuccess: () => {
      queryClient.invalidateQueries("survey");
    },
  });

  console.log("=======> useSurvey.jsx");

  return { addSurvey };
}
