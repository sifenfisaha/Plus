import React from "react";

const StatsCardSkeleton: React.FC = () => {
  return (
    <div className="p-6 border w-full flex-1 border-neutral-100 dark:border-neutral-700/80 rounded-xl animate-pulse">
      {/* Header */}
      <div className="flex gap-2 items-center justify-between">
        <div className="h-5 w-24 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
        <div className="h-5 w-5 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
      </div>

      {/* Total count */}
      <div className="mt-6 mb-1 h-12 w-20 bg-neutral-200 dark:bg-neutral-700 rounded"></div>

      {/* Subtext */}
      <div className="h-4 w-36 bg-neutral-200 dark:bg-neutral-700 rounded mt-2"></div>
    </div>
  );
};

export default StatsCardSkeleton;
