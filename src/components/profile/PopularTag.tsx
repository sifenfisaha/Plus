import { Sparkle } from "lucide-react";
import React from "react";
import Hashtags from "./ui/Hashtags";
import { useAppDispatch } from "../../app/hooks";
import { addTag } from "../../features/blogs/blogSlice";
import { useNavigate } from "react-router-dom";
import { usePopularTags } from "../../features/blogs/hooks";

const PopularTag: React.FC = () => {
  const dispatch = useAppDispatch();
  const naviate = useNavigate();
  const { data, isLoading } = usePopularTags();
  const addTags = (tag: string) => {
    dispatch(addTag(tag));
    naviate("/blogs");
  };

  return (
    <div className="pb-20 pt-10 px-4 dark:bg-[radial-gradient(circle,_rgba(20,20,20,1)_0%,_rgba(0,0,0,1)_100%)] flex items-center justify-center flex-col">
      <div className="flex py-1 dark:text-white dark:bg-neutral-700/20 dark:border-neutral-600/50 px-3 border border-neutral-300 rounded-full gap-2 bg-neutral-100/50">
        <Sparkle className="w-4" /> <span>cool Topics</span>
      </div>
      <h1 className="md:text-5xl text-3xl my-8 dark:text-white text-center font-bold">
        Explore Popular Topics
      </h1>
      <p className="text-neutral-300 mb-8 max-w-2xl text-center text-lg md:text-xl">
        Discover content across a wide range of interests and subjects.
      </p>
      {isLoading ? (
        <div className="flex items-center flex-wrap mb-7 gap-2 justify-center">
          {[...Array(6)].map((_, i) => (
            <li
              key={i}
              className="h-6 w-16 rounded-full bg-neutral-300 dark:bg-neutral-700 animate-pulse"
            ></li>
          ))}
        </div>
      ) : (
        <div className="flex items-center flex-wrap mb-7 gap-2 justify-center">
          {data?.tags.map((tag: { tag: string }, i: number) => (
            <button key={i} onClick={() => addTags(tag.tag)}>
              <Hashtags tag={tag.tag} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularTag;
