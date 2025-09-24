import {
  ArrowRight,
  BookOpen,
  ChartLine,
  Sparkle,
  ThumbsUp,
  User,
} from "lucide-react";
import React from "react";
import StatCard from "./ui/StatCard";
import Hashtags from "./ui/Hashtags";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="py-10 px-4 dark:bg-[radial-gradient(circle,_rgba(20,20,20,1)_0%,_rgba(0,0,0,1)_100%)] flex items-center justify-center flex-col">
      <div className="flex py-1 dark:text-white dark:bg-neutral-700/20 dark:border-neutral-600/50 px-3 border border-neutral-300 rounded-full gap-2 bg-neutral-100/50">
        <Sparkle className="w-4" /> <span>Discover amazing stories</span>
      </div>
      <h1 className="md:text-7xl text-5xl my-8 dark:text-white text-center font-bold">
        Find Your Next <br /> Favorite Read
      </h1>
      <p className="text-neutral-300 mb-8 max-w-2xl text-center text-lg md:text-xl">
        Explore thousands of articles from passionate writers around the world.
        Discover insights, tutorials, and stories that inspire and inform.
      </p>
      {/* <input
        type="text"
        className="md:min-w-xl max-w-2xl w-full bg-neutral-100 border-neutral-200 dark:bg-neutral-700/10 backdrop-blur-lg dark:border-neutral-700 border  outline-none px-5 mb-8 py-3 rounded-full dark:placeholder:text-neutral-400 text-center dark:text-white"
        placeholder="Search articles, topics, or author"
      /> */}
      <div className="flex  items-center mb-8 justify-center gap-4">
        <Link
          to={"/auth/singup"}
          className="flex dark:bg-white  bg-black md:block capitalize text-white dark:text-black  px-4 py-2 cursor-pointer rounded-full shadow-white items-center justify-center gap-3"
        >
          get started free <ArrowRight className="w-5 hidden md:inline-block" />
        </Link>
        <Link
          to={"/blogs"}
          className="flex border border-neutral-700/30 dark:text-white capitalize px-4 py-2 cursor-pointer rounded-full shadow-white items-center justify-center gap-3"
        >
          <BookOpen className="w-5 hidden md:inline-block" /> Explore blogs
        </Link>
      </div>
      {/* <div className="flex items-center flex-wrap mb-7 gap-2 justify-center">
        {tags.map((tag) => (
          <Hashtags key={tag} tag={tag} />
        ))}
      </div> */}
      <div className="flex flex-wrap items-center justify-center my-10 md:gap-25 ">
        <StatCard icon={<BookOpen />} stat="2.4K" title="Articles" />
        <StatCard icon={<User />} stat="850" title="Writers" />
        <StatCard icon={<ChartLine />} stat="15K" title="Readers" />
      </div>
    </div>
  );
};

export default Hero;
