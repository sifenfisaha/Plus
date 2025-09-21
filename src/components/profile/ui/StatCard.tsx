import React from "react";

interface StatCardProps {
  icon: React.ReactNode;
  stat: string | number;
  title: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, stat, title }) => {
  return (
    <div className="flex flex-col items-center justify-center  rounded-lg  w-28">
      <div className="text-2xl dark:text-white mb-2 bg-neutral-100 border-neutral-300 dark:bg-neutral-700/30 dark:border-neutral-600/60 border p-3 rounded-xl ">
        {icon}
      </div>
      <div className="text-lg font-bold dark:text-white">{stat}</div>
      <div className="text-sm dark:text-neutral-400 text-neutral-600">
        {title}
      </div>
    </div>
  );
};

export default StatCard;
