import React from "react";
import { useAppDispatch } from "../app/hooks";

import { toggleTheme } from "../features/ui/uiSlice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="min-h-screen w-full dark:bg-black">
        <button
          className="dark:text-white "
          onClick={() => dispatch(toggleTheme())}
        >
          toogle
        </button>
      </div>
    </>
  );
};

export default Home;
