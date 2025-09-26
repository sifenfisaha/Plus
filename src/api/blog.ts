import api from "../utils/axios";

interface Para {
  pageParam?: number;
  filter: string;
  search?: string;
  tags?: string
}

export const fetchPublishedBlogs = async (data: Para) => {
  const res = await api.get("/blog", {
    params: {
      page: data.pageParam,
      limit: 10,
      sortBy: data.filter,
      search: data.search,
      order: "desc",
      tags: data.tags
    },
  });
  return res.data;
};

export const fetchPopularTags = async () => {
  const res = await api.get("/tags");
  return res.data;
};
