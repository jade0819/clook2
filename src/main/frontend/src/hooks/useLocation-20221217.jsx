import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { setLocation } from "../api/api";
import { useLocationContext } from "../contexts/LocationContext";

export default function useLocation(location) {
  const queryClient = useQueryClient();
  const { updateSucc } = useLocationContext();

  const locationQuery = useQuery(["location"], () => setLocation(location), {
    refetchOnMount: "always",
    onSuccess: (data) => {
      updateSucc(true);
    },
  });

  console.log("=======> useLocation");

  return { locationQuery };
}
