import api from "../utils/axios";
import type { commentInput } from "../utils/validationSchemas";

interface Para {
  pageParam?: number;
  filter: string;
  search?: string;
  tags?: string;
}

export const fetchPublishedBlogs = async (data: Para) => {
  const res = await api.get("/blog", {
    params: {
      page: data.pageParam,
      limit: 10,
      sortBy: data.filter,
      search: data.search,
      order: "desc",
      tags: data.tags,
    },
  });
  return res.data;
};

export const fetchBlog = async (id: string) => {
  const res = await api.get(`/blog/${id}`);
  return res.data;
};

export const likeBlog = async (id: string) => {
  const res = await api.post(`/like/${id}/toggle`);
  return res.data;
};

export const bookmarkBlog = async (id: string) => {
  const res = await api.post(`/bookmarks/${id}/toggle`);
  return res.data;
};

export const addComment = async ({
  comment,
  id,
}: {
  id: string;
  comment: commentInput;
}) => {
  const res = await api.post(`/comment/${id}`, comment);
  return res.data;
};

export const fetchPopularTags = async () => {
  const res = await api.get("/tags");
  return res.data;
};
