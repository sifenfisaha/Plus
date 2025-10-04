import { useQuery } from "@tanstack/react-query";
import { dashboardStat, myBlogs } from "../../api/dashboard";

export const useDashboardStat = () =>
  useQuery({ queryFn: dashboardStat, queryKey: ["dashboard", "blog"] });
export const useMyBlog = () =>
  useQuery({ queryFn: myBlogs, queryKey: ["myblogs", "blogs"] });
