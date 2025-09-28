import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import {
  addComment,
  bookmarkBlog,
  fetchBlog,
  fetchPopularTags,
  fetchPublishedBlogs,
  likeBlog,
} from "../../api/blog";
import { queryClient } from "../../app/queryClient";
import type { IBlog } from "../../types/types";
import { useAppDispatch } from "../../app/hooks";
import type { AxiosError } from "axios";
import { notifyError, notifySuccess } from "../ui/uiSlice";
import type { commentInput } from "../../utils/validationSchemas";

export const useInfiniteBlogs = (
  filter: string,
  query?: string,
  tags?: string
) =>
  useInfiniteQuery({
    queryKey: ["blogs", filter, query, tags],
    queryFn: ({ pageParam = 1 }) =>
      fetchPublishedBlogs({ filter, pageParam, search: query, tags }),
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

export const useBlog = (id: string) =>
  useQuery({ queryFn: () => fetchBlog(id), queryKey: ["blog", id] });

export const useToggleLike = (userId: string) => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: (id: string) => likeBlog(id),
    onMutate: async (id: string) => {
      console.log(userId);
      console.log(id);
      await queryClient.cancelQueries({ queryKey: ["blogs"] });
      await queryClient.cancelQueries({ queryKey: ["blog", id] });

      const prevInfinite = queryClient.getQueryData<any>(["blogs"]);
      const prevBlog = queryClient.getQueryData<IBlog>(["blog", id]);

      if (prevInfinite) {
        queryClient.setQueryData(["blogs"], {
          ...prevInfinite,
          pages: prevInfinite.pages.map((page: any) => ({
            ...page,
            blogs: page.blogs.map((b: any) => {
              const liked = b.likedBy.includes(userId);
              if (b._id === id) {
                return {
                  ...b,
                  likes: b.likes + (liked ? -1 : 1),
                  likedBy: b.likedBy.filter((i: string) => i !== userId),
                };
              } else {
                return b;
              }
            }),
          })),
        });
      }

      if (prevBlog) {
        const likedBy = prevBlog.likedBy || [];
        const liked = likedBy.includes(userId);

        queryClient.setQueryData(["blog", id], {
          ...prevBlog,
          likes: prevBlog.likes + (liked ? -1 : 1),
          likedBy: liked
            ? likedBy.filter((i: string) => i !== userId)
            : [...likedBy, userId],
        });
      }

      return { prevInfinite, prevBlog };
    },
    onError: (_err: AxiosError, id, ctx) => {
      console.log(userId);
      if (_err.status === 401 && _err.response?.data) {
        dispatch(notifyError("Please login first"));
      }
      console.log(_err);
      if (ctx?.prevInfinite)
        queryClient.setQueryData(["blogs"], ctx.prevInfinite);
      if (ctx?.prevBlog) queryClient.setQueryData(["blog", id], ctx.prevBlog);
    },

    onSettled: (_data, _err, id) => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      queryClient.invalidateQueries({ queryKey: ["blog", id] });
    },
    onSuccess: (data: { message: string }) => {
      console.log(userId);
      dispatch(notifySuccess(data.message));
    },
  });
};

export const useToggleBookmark = (userId: string) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (id: string) => bookmarkBlog(id),

    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["user", userId] });

      const prevUser = queryClient.getQueryData<any>(["user", userId]);

      if (prevUser?.user) {
        const alreadyBookmarked = prevUser.user.bookmarks?.includes(id);

        queryClient.setQueryData(["user", userId], {
          ...prevUser,
          user: {
            ...prevUser.user,
            bookmarks: alreadyBookmarked
              ? prevUser.user.bookmarks.filter((b: any) => b._id !== id)
              : [...prevUser.user.bookmarks, { _id: id }],
          },
        });

        return prevUser;
      }
    },

    onError: (err: AxiosError, blogId, ctx) => {
      if (err.status === 401 && err.response?.data) {
        dispatch(notifyError("Please login first"));
      }
      if (ctx?.user) {
        queryClient.setQueryData(["user", userId], ctx);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user", userId] });
    },

    onSuccess: (data: { message: string }) => {
      dispatch(notifySuccess(data.message));
    },
  });
};

export const useAddComment = () => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: addComment,
    onSuccess: (data, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["blog", id] });
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      dispatch(notifySuccess(data.message));
    },
  });
};
