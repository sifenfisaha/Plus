import React, { useMemo, useState } from "react";
import {
  Bookmark,
  Clock,
  Heart,
  LucideEye,
  MessageCircle,
  Share2,
} from "lucide-react";
import Tags from "./Tags";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import {
  useToggleBookmark,
  useToggleLike,
} from "../../../features/blogs/hooks";
import type { IBlog } from "../../../types/types";
import { useUser } from "../../../features/profile/hooks";

interface Props {
  blog: IBlog;
}

const Blog: React.FC<Props> = ({ blog }) => {
  // console.log(blog);
  const { user } = useAppSelector((s) => s.auth);
  const liked = blog.likedBy.includes(user?.id || "nolike");
  const date = new Date(blog.createdAt);

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  // const year = date.getUTCFullYear();

  const createat = `${month} ${day.toString().padStart(2, "0")}`;

  // const toggleLike = async () => {
  //   console.log("clicked");
  //   console.log("like", like);
  //   await likeBlog(blog._id);
  //   setLike(!like);
  // };
  const state = useAppSelector((s) => s.auth);
  const toggleLike = useToggleLike(state.user?.id || "");

  const { data: stateUser } = useUser(state.user?.id);

  const toggleBookmark = useToggleBookmark(user?.id);

  const bookmarked = stateUser?.user?.bookmarks?.includes(blog._id) ?? false;

  const handleToggle = () => {
    toggleBookmark.mutate(blog._id);
  };

  return (
    <div className="border dark:border-neutral-700 mb-6 mt-2 p-4 md:p-6 rounded-lg border-neutral-200">
      <div className="flex items-center justify-between">
        <div className="flex gap-4  items-center justify-start">
          <div className="w-10 capitalize flex items-center justify-center h-10 dark:bg-neutral-100 dark:text-black font-semibold text-lg rounded-full bg-neutral-800  text-white">
            {`${blog.author.first_name[0].toUpperCase()}${blog.author.last_name[0].toUpperCase()}`}
          </div>
          <div>
            <div className="font-semibold capitalize  dark:text-white">
              {` ${blog.author.first_name} ${blog.author.last_name}`}
            </div>

            <p className="flex gap-2 text-neutral-500 dark:text-neutral-300 items-center">
              <span>{createat}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-500 dark:bg-neutral-300 "></span>
              <Clock className="w-3.5 " />
              <span>{blog.reading_time} min read</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 dark:text-neutral-400  items-center">
          <Share2 className="w-5" />
        </div>
      </div>
      <div>
        <Link to={`/blogs/${blog._id}`}>
          <h2 className="text-xl py-5 dark:text-white font-semibold">
            {blog.title}
          </h2>
        </Link>
        <h3 className="text-neutral-500 pb-6 dark:text-neutral-300">
          {blog.description}
        </h3>
      </div>
      <div className="flex gap-2">
        {blog?.tags.map((tag: string) => (
          <Tags key={tag} tag={tag} />
        ))}
      </div>
      <div className="pt-5 flex items-center justify-between">
        <div>
          <div className="flex items-center justify-start w-fit gap-4">
            <button
              onClick={() => toggleLike.mutate(blog._id)}
              className={`flex ${
                liked
                  ? "text-red-500 dark:text-red-500"
                  : "dark:text-neutral-400"
              } gap-2 items-center justify-center rounded-lg`}
            >
              <Heart className={`w-4 ${liked ? "fill-red-500" : ""}`} />
              <span>{blog.likes}</span>
            </button>
            <Link
              to={blog._id}
              className="flex gap-2 dark:text-neutral-400  items-center"
            >
              <MessageCircle className="w-4" />{" "}
              <span>{blog.comments.length}</span>
            </Link>
            <div className="flex gap-2 dark:text-neutral-400  items-center">
              <LucideEye className="w-4" /> <span>{blog.read_count}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 dark:text-neutral-400  items-center">
          <button
            className={`${bookmarked ? "text-black dark:text-white" : ""}`}
            onClick={handleToggle}
            disabled={toggleBookmark.isPending}
          >
            <Bookmark
              className={`w-4 ${
                bookmarked ? "dark:fill-white fill-black" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
