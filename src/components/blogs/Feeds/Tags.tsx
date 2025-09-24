import React from "react";

interface Props {
  tag: string;
}

const Tags: React.FC<Props> = ({ tag }) => {
  return (
    <div className="bg-neutral-100/50 hover:scale-102 transition-all ease-in-out duration-200 dark:text-neutral-200/80 hover:text-black dark:hover:text-white dark:bg-neutral-700/30 dark:border-neutral-600/20 cursor-pointer border border-neutral-200 rounded-lg px-2 py-[0.5px] md:text-sm text-xs text-neutral-500">
      <span>#</span>
      <span>{tag}</span>
    </div>
  );
};

export default Tags;
