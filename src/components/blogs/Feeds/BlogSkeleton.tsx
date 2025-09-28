import React from "react";

const BlogSkeleton: React.FC = () => {
  return (
    <div className="border z-5 w-full dark:border-neutral-700 mb-8 p-4 md:p-6 md:mt-2 rounded-lg border-neutral-200 animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-neutral-300 dark:bg-neutral-700"></div>

          {/* Author info */}
          <div>
            <div className="h-4 w-32 bg-neutral-300 dark:bg-neutral-700 rounded mb-2"></div>
            <div className="flex gap-2 items-center">
              <div className="h-3 w-20 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
              <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600"></div>
              <div className="h-3 w-12 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
            </div>
          </div>
        </div>

        {/* Share icon placeholder */}
        <div className="w-5 h-5 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
      </div>

      {/* Title & Description */}
      <div>
        <div className="h-6 w-2/3 bg-neutral-300 dark:bg-neutral-700 rounded mt-5 mb-3"></div>
        <div className="h-4 w-full bg-neutral-300 dark:bg-neutral-700 rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 mt-4">
        <div className="h-6 w-12 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        <div className="h-6 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        <div className="h-6 w-10 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
      </div>

      {/* Footer */}
      <div className="pt-5 flex items-center justify-between">
        <div className="flex gap-4">
          <div className="h-4 w-10 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
          <div className="h-4 w-10 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
          <div className="h-4 w-10 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        </div>
        <div className="w-5 h-5 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
