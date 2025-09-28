import React from "react";
import { useBlog } from "../../features/blogs/hooks";
import { useParams } from "react-router-dom";
import Blog from "./component/Blog";

const Layout: React.FC = () => {
  const { id } = useParams();
  const { data, isPending } = useBlog(id!);

  return (
    <>
      {isPending ? (
        <p className="dark:text-white">loading...</p>
      ) : (
        <Blog blog={data.blog} />
      )}
    </>
  );
};

export default Layout;
