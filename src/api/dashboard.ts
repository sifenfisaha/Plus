import api from "../utils/axios";

export const dashboardStat = async () => {
  const res = await api.get("/dashboard/stats");
  return res.data;
};
export const myBlogs = async () => {
  const res = await api.get("blog/me");
  return res.data;
};
