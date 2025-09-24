import api from "../utils/axios";

interface Para {
  pageParam?: number;
  filter: string;
}

export const fetchPublishedBlogs = async (data: Para) => {
  const res = await api.get("/blog", {
    params: {
      page: data.pageParam,
      limit: 10,
      sortBy: data.filter,
      order: "desc",
    },
  });
  return res.data;
};

export const fetchPopularTags = async () => {
  const res = await api.get("/tags");
  return res.data;
};
