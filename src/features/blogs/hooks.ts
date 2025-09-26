import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchPopularTags, fetchPublishedBlogs } from "../../api/blog";

export const useInfiniteBlogs = (filter: string, query?:string, tags?: string) =>
  useInfiniteQuery({
    queryKey: ["blogs", filter, query, tags],
    queryFn: ({ pageParam = 1 }) => fetchPublishedBlogs({ filter, pageParam , search: query, tags}),
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
