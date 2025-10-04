import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  LogOutIcon,
  PencilIcon,
  Settings,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { logout } from "../../features/auth/authSlice";
import { notifySuccess } from "../../features/ui/uiSlice";

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -5 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -5 },
};

interface Props {
  onClose: () => void;
}

const Menu: React.FC<Props> = ({ onClose }) => {
  const data = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      <motion.div
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="p-2 mt-2 rounded-sm bg-white dark:bg-black dark:border-neutral-700/60 border border-neutral-200 absolute top-full right-0 flex flex-col"
      >
        <div className="p-2 dark:bg-neutral-800 bg-neutral-100/50 rounded-sm flex items-center justify-center gap-4">
          <div className="w-9 h-9 dark:bg-neutral-700 dark:text-white font-bold bg-neutral-200 text-black flex items-center justify-center text-xl rounded-full">
            {data.user?.first_name[0]}
          </div>
          <div className="pr-10">
            <p className="font-bold dark:text-white">{data.user?.first_name}</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              {data.user?.email}
            </p>
          </div>
        </div>
        <div className="h-[1.5px] w-full bg-black/10 dark:bg-neutral-800 my-2"></div>
        <div className="px-2 py-1 flex flex-col gap-1">
          <div
            className="flex hover:dark:bg-neutral-800 transition-all duration-200 ease-in-out
           hover:bg-neutral-50 rounded-sm cursor-pointer p-1 items-center justify-start gap-4"
          >
            <LayoutDashboard className="w-4 text-neutral-400" />
            <Link
              onClick={onClose}
              className="capitalize text-base dark:text-white"
              to={"/dashboard"}
            >
              dashboard
            </Link>
          </div>
          <div
            className="flex hover:dark:bg-neutral-800 transition-all duration-200 ease-in-out
           hover:bg-neutral-50 rounded-sm cursor-pointer p-1 items-center justify-start gap-3"
          >
            <PencilIcon className="w-4 text-neutral-400" />
            <Link
              onClick={onClose}
              className="capitalize text-base dark:text-white"
              to={"/new"}
            >
              write Article
            </Link>
          </div>
        </div>
        <div className="h-[1.5px] w-full bg-black/10 dark:bg-neutral-800 my-2"></div>
        <div className="px-2 py-1 flex flex-col gap-1">
          <div
            className="flex hover:dark:bg-neutral-800 transition-all duration-200 ease-in-out
           hover:bg-neutral-50 rounded-sm cursor-pointer p-1 items-center justify-start gap-4"
          >
            <Settings className="w-4 text-neutral-400" />
            <Link
              onClick={onClose}
              className="capitalize text-base dark:text-white"
              to={"/profile"}
            >
              profile Settings
            </Link>
          </div>
        </div>
        <div className="h-[1.5px] w-full bg-black/10 dark:bg-neutral-800 my-2"></div>
        <div className="px-2 py-1 flex flex-col gap-1">
          <div
            className="flex hover:dark:bg-neutral-800 transition-all duration-200 ease-in-out
           hover:bg-neutral-50 rounded-sm cursor-pointer p-1 items-center justify-start gap-4"
          >
            <LogOutIcon className="w-4 text-neutral-400" />
            <button
              onClick={() => {
                dispatch(logout());
                dispatch(notifySuccess("Logout successfully"));
                navigate("/");
              }}
              className="capitalize cursor-pointer text-red-600 text-base"
            >
              sign out
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
