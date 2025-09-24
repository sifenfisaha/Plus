import React from "react";
import {
  Bookmark,
  Clock,
  Heart,
  LucideEye,
  MessageCircle,
  Share2,
} from "lucide-react";
import Tags from "./Tags";

interface Props {
  blog: any;
}

const Blog: React.FC<Props> = ({ blog }) => {
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
        <h2 className="text-xl py-5 dark:text-white font-semibold">
          {blog.title}
        </h2>
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
            <button className="flex dark:text-neutral-400 gap-2 items-center">
              <Heart className="w-4" />
              <span>{blog.likes}</span>
            </button>
            <div className="flex gap-2 dark:text-neutral-400  items-center">
              <MessageCircle className="w-4" /> <span>23</span>
            </div>
            <div className="flex gap-2 dark:text-neutral-400  items-center">
              <LucideEye className="w-4" /> <span>{blog.reading_time}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 dark:text-neutral-400  items-center">
          <Bookmark className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
