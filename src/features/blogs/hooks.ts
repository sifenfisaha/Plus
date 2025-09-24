import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchPopularTags, fetchPublishedBlogs } from "../../api/blog";

export const useInfiniteBlogs = (filter: string) =>
  useInfiniteQuery({
    queryKey: ["blogs", filter],
    queryFn: ({ pageParam = 1 }) => fetchPublishedBlogs({ filter, pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextPage : undefined,
    initialPageParam: 1,
  });

export function usePopularTags() {
  return useQuery({
    queryKey: ["popular-tags"],
    queryFn: fetchPopularTags,
  });
}
