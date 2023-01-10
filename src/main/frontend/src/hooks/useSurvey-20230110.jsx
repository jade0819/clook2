import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getApi } from "../api/api";

export default function useSurvey() {
  const queryClient = useQueryClient();

  const addSurvey = useMutation((params) => getApi("survey", params), {
    useErrorBoundary: false,
    onSuccess: () => {
      // 쿼리 무효화는 stale 상태인 다른 쿼리들을 refetch 하기 때문에 변경사항을 화면에 출력해야될 때 사용한다.
      queryClient.invalidateQueries("survey");
    },
  });

  console.log("=======> useSurvey.jsx");

  return addSurvey;
}
