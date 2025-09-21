import React from "react";

export interface Props {
  dis: string;
  title: string;
  icon: React.ReactNode;
}

const Card: React.FC<Props> = ({ title, dis, icon }) => {
  return (
    <div className="p-6 rounded-2xl flex dark:border-neutral-700/50 flex-col transition-all duration-300 ease-in-out border-[1px] border-neutral-100">
      <div className="p-3 dark:border-neutral-700/50 border-neutral-100 border flex-1 w-fit rounded-xl mb-4">
        {icon}
      </div>
      <p className="text-lg font-bold dark:text-white mb-2">{title}</p>
      <p className="text-base text-neutral-500"> {dis}</p>
    </div>
  );
};

export default Card;
