import { ArrowRight, BookOpen } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="pb-20 px-4 dark:bg-[radial-gradient(circle,_rgba(36,36,36,1)_0%,_rgba(26,26,26,1)_100%)] flex items-center justify-center flex-col">
      <h1 className="md:text-5xl text-3xl my-8 dark:text-white text-center font-bold">
        Ready to start your writing journey?
      </h1>
      <p className="text-neutral-300 mb-8 max-w-2xl text-center text-lg md:text-xl">
        Join our community of passionate writers and readers. Share your
        stories, discover new perspectives, and build your audience.
      </p>
      <div className="flex items-center justify-center gap-4">
        {" "}
        <button className="flex dark:bg-white  bg-black capitalize text-white dark:text-black  px-4 py-2 cursor-pointer rounded-full shadow-white items-center justify-center gap-3">
          Start writing today{" "}
          <ArrowRight className="w-5 hidden md:inline-block" />
        </button>
        <button className="flex border-neutral-700/80 border dark:text-white capitalize px-4 py-2 cursor-pointer rounded-full shadow-white items-center justify-center gap-3">
          <BookOpen className="w-5 hidden md:inline-block" /> brouse content
        </button>
      </div>
      <p className="text-neutral-400 text-center pt-8">
        No credit card required • Free forever • Join 2,400+ writers
      </p>
    </div>
  );
};

export default Footer;
