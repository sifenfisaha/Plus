import React from "react";
import type { Icomment } from "../../../types/types";
import { formatData } from "../../../utils/data";

interface Props {
  comment: Icomment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  const { day, month, year } = formatData(comment.createdAt);
  const createat = `${month}  ${day.toString().padStart(2, "0")},  ${year}`;
  return (
    <div className="bg-neutral-50 flex rounded-lg items-start gap-4 dark:bg-neutral-700/20 border p-4 my-3 w-full border-neutral-100 dark:border-neutral-700/60">
      <div className="md:w-12 min-w-8 capitalize flex items-center  justify-center h-8 md:h-12 dark:bg-neutral-100 dark:text-black font-semibold text-base md:text-xl rounded-full bg-neutral-800  text-white">
        {`${comment.author.first_name[0].toUpperCase()}${comment.author.last_name[0].toUpperCase()}`}
      </div>
      <div>
        <div className="font-semibold flex items-center gap-3 text-lg md:text-xl capitalize  dark:text-white">
          <span>{`${comment.author.first_name} ${comment.author.last_name}`}</span>
          <span className="text-neutral-500 dark:text-neutral-400 font-normal text-lg">
            {createat}
          </span>
        </div>
        <p className="dark:text-neutral-200 text-lg ">{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;
