import {
  ArrowLeft,
  Bookmark,
  Clock,
  Edit,
  Eye,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Hashtags from "../../profile/ui/Hashtags";
import type { IBlog, Icomment } from "../../../types/types";
import {
  useToggleBookmark,
  useToggleLike,
} from "../../../features/blogs/hooks";
import { useAppSelector } from "../../../app/hooks";
import { useUser } from "../../../features/profile/hooks";
import { formatData } from "../../../utils/data";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface Props {
  blog: IBlog;
}

const Blog: React.FC<Props> = ({ blog }) => {
  const { day, month, year } = formatData(blog.createdAt);
  const createat = `${month}  ${day.toString().padStart(2, "0")},  ${year}`;
  const { user, isAuthenticated } = useAppSelector((s) => s.auth);
  const liked = blog.likedBy.includes(user?.id || "nolike");
  const { data } = useUser(user?.id || "");
  const bookmarked = data?.user?.bookmarks?.includes(blog._id);
  const handleToggle = (): void => {
    toggleBookmark.mutate(blog._id);
  };
  const toggleBookmark = useToggleBookmark(user?.id || "");
  const toggleLike = useToggleLike(user?.id || "");

  return (
    <div>
      <div className="flex items-center justify-between">
        {" "}
        <Link
          to={"/blogs"}
          className="flex gap-3 py-2 px-3 border border-neutral-100 hover:bg-neutral-50 duration-200 transition-all ease-in-out rounded-xl dark:text-white dark:border-neutral-700/60 hover:dark:bg-neutral-700/20 items-center justify-center w-fit"
          // relative="path"
        >
          <ArrowLeft className="w-5" />
          <span className="hidden md:inline-block">Back to blogs</span>
        </Link>
        <div className="flex gap-4 items-center justify-center">
          <button className="flex gap-3 p-2 px-3 border border-neutral-100 hover:bg-neutral-50 duration-200 transition-all ease-in-out rounded-lg dark:text-white dark:border-neutral-700/60 hover:dark:bg-neutral-700/20 cursor-pointer items-center justify-center w-fit">
            <Share2 className="w-5" />
            <span>share</span>
          </button>
          {blog.author._id === user?.id && (
            <Link
              to={`/edit/${blog._id}`}
              className="flex gap-3 p-2 px-3 border border-neutral-100 hover:bg-neutral-50 duration-200 transition-all ease-in-out rounded-lg dark:text-white dark:border-neutral-700/60 hover:dark:bg-neutral-700/20 cursor-pointer items-center justify-center w-fit"
            >
              <Edit className="w-5" />
              <span>Edit</span>
            </Link>
          )}
        </div>
      </div>
      <div className="py-8 dark:text-white">
        <h1 className="font-bold text-3xl md:text-6xl">{blog.title}</h1>
        <h2 className="font-semibold dark:text-neutral-400 pt-4 text-2xl md:text-4xl">
          {blog.description}
        </h2>
      </div>
      <div className="">
        <div className="flex gap-4 flex-col  items-start justify-between">
          <div className="flex gap-4 items-center">
            <div className="md:w-16 min-w-10 min-h-10 text-base capitalize flex items-center  justify-center md:h-16 dark:bg-neutral-100 dark:text-black font-semibold md:text-2xl rounded-full bg-neutral-800  text-white">
              {`${blog.author.first_name[0].toUpperCase()}${blog.author.last_name[0].toUpperCase()}`}
            </div>
            <div className="py-5">
              <div className="font-semibold text-lg md:text-xl capitalize  dark:text-white">
                {` ${blog.author.first_name} ${blog.author.last_name}`}
              </div>

              <p className="flex md:gap-4 text-lg gap-3 text-nowrap text-neutral-500 dark:text-neutral-300 items-center">
                <span>{createat}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-500 dark:bg-neutral-300 "></span>
                <Clock className="w-4 " />
                <span>{blog.reading_time} min read</span>
                <span className="w-1 h-1 rounded-full md:inline-block hidden bg-neutral-500 dark:bg-neutral-300 "></span>
                <Eye className="w-4 md:inline-block hidden" />
                <span className="md:inline-block hidden">
                  {blog.read_count}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            {blog.tags.map((tag, i: number) => (
              <Hashtags key={i} tag={tag} />
            ))}
          </div>

          <div className="py-5 flex items-center w-full justify-between">
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
                  <Heart className={`w-5 ${liked ? "fill-red-500" : ""}`} />
                  <span>{blog.likes}</span>
                </button>
                <div className="flex gap-2 dark:text-neutral-400  items-center">
                  <MessageCircle className="w-4" />{" "}
                  <span>{blog.comments.length}</span>
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
                  className={`w-5 ${
                    bookmarked ? "dark:fill-white fill-black" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px] bg-neutral-100 mb-8 rounded-full dark:bg-neutral-700"></div>
        <div>
          <h1 className="text-2xl font-semibold dark:text-white">
            {blog.title}
          </h1>
          <p className="dark:text-neutral-400 text-xl py-2">
            {blog.description}
          </p>
          {/* <p className="dark:text-neutral-100">{blog.body}</p> */}
          {/* TODO : making the markdown work */}
          <article className="dark:text-white  max-w-none break-words1  ">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {blog.body}
            </ReactMarkdown>
          </article>
        </div>
        {/* comments */}
        <div className="dark:text-white py-8">
          <h2 className="flex capitalize text-2xl font-semibold gap-3">
            <span>comments </span>
            <span>{blog.comments.length}</span>
          </h2>
          {isAuthenticated && <CommentInput id={blog._id} />}
          <div>
            {blog.comments?.map((comment: Icomment) => (
              <Comment comment={comment} key={comment._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
