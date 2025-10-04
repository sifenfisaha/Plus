import React from "react";
import { useBlog } from "../../features/blogs/hooks";
import { useParams } from "react-router-dom";
import Blog from "./component/Blog";
import BlogSkeleton from "./component/BlogLoading";

const Layout: React.FC = () => {
  const { id } = useParams();
  const { data, isPending } = useBlog(id!);

  return (
    <>
      {isPending ? (
        // <p className="dark:text-white">loading...</p>
        <BlogSkeleton />
      ) : (
        <Blog blog={data.blog} />
      )}
    </>
  );
};

export default Layout;
