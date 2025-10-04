import type { IBlog } from "../../../types/types";
import { useMyBlog } from "../../../features/dashboard/hooks";
import BlogSkeleton from "../../blogs/Feeds/BlogSkeleton";
import Blog from "./Blog";

export default function BlogList() {
  const { data, isPending } = useMyBlog();
  if (data) {
    console.log(data.blogs);
  }

  if (isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }

  if (data) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.blogs?.map((blog: IBlog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    );
  }

  return <></>;
}
