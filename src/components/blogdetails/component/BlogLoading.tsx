import React from "react";

const BlogSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      {/* Top nav (back + share/edit) */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3 py-2 px-3 border border-neutral-100 rounded-xl dark:border-neutral-700/60 w-40 h-10 bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="flex gap-4">
          <div className="w-20 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="w-20 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-700"></div>
        </div>
      </div>

      {/* Title & description */}
      <div className="py-8">
        <div className="h-10 w-3/4 rounded bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="h-8 w-2/4 mt-4 rounded bg-neutral-200 dark:bg-neutral-700"></div>
      </div>

      {/* Author + meta */}
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
        <div>
          <div className="h-5 w-40 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          <div className="h-4 w-60 mt-2 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-4">
        <div className="h-6 w-16 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
        <div className="h-6 w-20 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
        <div className="h-6 w-14 bg-neutral-200 dark:bg-neutral-700 rounded-full"></div>
      </div>

      {/* Like, comment, bookmark section */}
      <div className="py-5 flex items-center justify-between">
        <div className="flex gap-4">
          <div className="h-6 w-14 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          <div className="h-6 w-14 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        </div>
        <div className="h-6 w-10 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
      </div>

      {/* Body content */}
      <div className="w-full h-[2px] bg-neutral-200 dark:bg-neutral-700 my-6"></div>
      <div className="space-y-4">
        <div className="h-6 w-2/3 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-4 w-5/6 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-4 w-4/6 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
      </div>

      {/* Comments */}
      <div className="py-8 space-y-4">
        <div className="h-6 w-32 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-12 w-full bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-12 w-full bg-neutral-200 dark:bg-neutral-700 rounded"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
