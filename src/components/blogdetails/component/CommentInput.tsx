import React from "react";
import {
  commentSchema,
  type commentInput,
} from "../../../utils/validationSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddComment } from "../../../features/blogs/hooks";

const CommentInput: React.FC<{ id: string }> = ({ id }) => {
  const { register, handleSubmit, reset } = useForm<commentInput>({
    resolver: zodResolver(commentSchema),
  });

  const { mutate, isPending } = useAddComment();

  return (
    <div className="bg-neutral-50 flex rounded-lg items-center gap-4 dark:bg-neutral-700/20 border p-4 my-3 w-full border-neutral-100 justify-start dark:border-neutral-700/60">
      <form
        onSubmit={handleSubmit((comment) => {
          mutate({ comment: comment, id });
          reset();
        })}
        className="w-full flex flex-col items-end"
      >
        <textarea
          {...register("content")}
          className="mb-4 min-w-full outline-none border border-neutral-700/60 rounded-lg p-2"
        />
        <button
          className={`capitalize cursor-pointer px-4 py-2 bg-black rounded-lg text-white dark:text-black font-semibold dark:bg-white`}
        >
          {isPending ? "posting" : "post Comment"}
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
