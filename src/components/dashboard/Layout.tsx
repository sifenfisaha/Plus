import React from "react";
import { useAppSelector } from "../../app/hooks";
import { useDashboardStat, useMyBlog } from "../../features/dashboard/hooks";
import { BookOpen, Eye, Globe, Heart, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import BlogList from "./components/BlogList";

const Layout: React.FC = () => {
  const { user } = useAppSelector((s) => s.auth);
  const { data, isPending } = useDashboardStat();

  return (
    <div className="md:mx-40 mb-10 mx-5">
      <h1 className="text-2xl md:text-3xl dark:text-white">
        Welcome Back, {user?.first_name}!
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mt-4">
        Manage your blog posts and track your writing progress.
      </p>
      {data && (
        <div className="flex gap-4 flex-col md:flex-row w-full items-center justify-between my-10">
          <div className="p-6 border w-full flex-1 border-neutral-100 dark:border-neutral-700/80 rounded-xl">
            <div className="flex gap-2  items-center justify-between">
              <p className="dark:text-white capitalize">total post</p>
              <BookOpen className="w-5 dark:text-white" />
            </div>
            <p className="text-4xl font-semibold mt-6 mb-1 dark:text-white">
              {data.totalBlogs}
            </p>
            <p className="dark:text-neutral-300">
              {`${data.publishedBlogs} draft, ${
                data.totalBlogs - data.publishedBlogs
              } published`}
            </p>
          </div>
          {/*  */}
          <div className="p-6 border w-full flex-1 border-neutral-100 dark:border-neutral-700/80 rounded-xl">
            <div className="flex gap-2 items-center justify-between">
              <p className="dark:text-white capitalize">Published</p>
              <Globe className="w-5 dark:text-white" />
            </div>
            <p className="text-4xl font-semibold mt-6 mb-1 dark:text-white">
              {data.publishedBlogs}
            </p>
            <p className="dark:text-neutral-300">{`Live on the platform`}</p>
          </div>
          {/*  */}
          <div className="p-6 border w-full flex-1 border-neutral-100 dark:border-neutral-700/80 rounded-xl">
            <div className="flex gap-2 items-center justify-between">
              <p className="dark:text-white capitalize">Likes</p>
              <Heart className="w-5 dark:text-white" />
            </div>
            <p className="text-4xl font-semibold mt-6 mb-1 dark:text-white">
              {data.totalLikes}
            </p>
            <p className="dark:text-neutral-300">{`Across all posts`}</p>
          </div>
          {/*  */}
          <div className="p-6 border w-full flex-1 border-neutral-100 dark:border-neutral-700/80 rounded-xl">
            <div className="flex gap-2 items-center justify-between">
              <p className="dark:text-white capitalize">Avg. Views</p>
              <Eye className="w-5 dark:text-white" />
            </div>
            <p className="text-4xl font-semibold mt-6 mb-1 dark:text-white">
              {data.totalViews}
            </p>
            <p className="dark:text-neutral-300">{`Per published post`}</p>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between">
        <p className="capitalize text-lg dark:text-white">Your Blog Posts</p>
        <Link
          className="bg-black px-2 py-1 dark:bg-white dark:text-black text-white rounded-lg flex gap-2 items-center justify-between capitalize"
          to={"/new"}
        >
          <Pencil className="w-4" />
          <span>new blog</span>
        </Link>
      </div>
      <div>
        <BlogList />
      </div>
    </div>
  );
};

export default Layout;
