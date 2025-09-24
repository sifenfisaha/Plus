import { Eye, Heart, Timer, TrendingUp } from "lucide-react";
import React, { useState } from "react";

const filters: { filter: string; icon: React.ReactNode }[] = [
  // { filter: "all", icon: <Zap className="w-5" /> },
  { filter: "latest", icon: <Timer className="w-5" /> },
  { filter: "popular", icon: <Heart className="w-5" /> },
  { filter: "trending", icon: <TrendingUp className="w-5" /> },
  { filter: "most-read", icon: <Eye className="w-5" /> },
];

interface Props {
  onClick: (filter: string) => void;
}

const FilterNav: React.FC<Props> = ({ onClick }) => {
  const [active, setActive] = useState<number>(0);
  return (
    <nav className="flex justify-center w-full md:justify-start py-1 z-10 sticky top-0 ">
      <ul className="flex overflow-x-auto no-scrollbar  gap-4 px-4 md:px-6 border rounded-lg md:rounded-full overflow-hidden dark:border-neutral-700 w-fit border-neutral-100  bg-white/30 backdrop-blur-lg dark:bg-neutral-800/30  items-center justify-start">
        {filters.map((f, i) => (
          <li className="" key={f.filter}>
            <button
              onClick={() => {
                onClick(f.filter);
                setActive(i);
              }}
              className={`cursor-pointer ${active === i ? "dark:border-white border-black dark:text-white" : "border-transparent text-gray-600 dark:text-neutral-400"} border-b-2   flex items-center justify-center text-sm md:text-base gap-4 hover:text-black hover:dark:text-white text-nowrap duration-300 translate-all ease-in-out py-4 px-2`}
            >
              {f.icon} <span>{f.filter}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FilterNav;
