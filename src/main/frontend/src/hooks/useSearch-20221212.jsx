import { useQuery } from "@tanstack/react-query";
import { getSearchList } from "../api/weatherApi";

export default function useSearch(keyword) {
  const searchQuery = useQuery(
    ["search", keyword],
    () => getSearchList(keyword),
    {
      staleTime: 1000 * 60 * 5,
      enabled: false,
      // enabled: !!locationQuery.isSuccess,
    }
  );

  return { searchQuery };
}
