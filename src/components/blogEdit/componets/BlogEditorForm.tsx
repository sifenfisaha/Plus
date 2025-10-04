import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { blogSchema } from "../../../utils/validationSchemas";
import type { blogInput } from "../../../utils/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useBlog,
  useDeleteBlog,
  useUpdateBlog,
} from "../../../features/blogs/hooks";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Eye, Save, Trash } from "lucide-react";
import Preview from "./Preview";

const BlogEditorForm: React.FC = () => {
  const { register, handleSubmit, setValue, reset, getValues } =
    useForm<blogInput>({
      resolver: zodResolver(blogSchema),
    });
  const [previewData, setPreviewData] = useState<blogInput | null>(null);
  const [mode, setMode] = useState<boolean>(true);
  const { mutate: deleteMutate, isPending: deletePending } = useDeleteBlog();
  const { id } = useParams();
  const {
    data: { blog },
  } = useBlog(id!);
  console.log(blog);
  const { mutate, isPending } = useUpdateBlog(blog.id);
  //   const submithanler = ({}: blogInput) => {};

  const handleMode = () => {
    const data = getValues();
    setPreviewData(data);
    setMode(!mode);
  };
  const handleDelete = (id: string) => {
    deleteMutate(id);
  };

  useEffect(() => {
    if (blog) {
      reset({
        body: blog.body,
        description: blog.description,
        tags: blog.tags,
        title: blog.title,
      });
    }
  }, [blog, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit((blog) => {
          mutate(blog);
        })}
      >
        <div className="flex items-center mb-6 gap-4 justify-between">
          <Link className="dark:text-white flex gap-3" to={"/blogs"}>
            <ArrowLeft className="w-4" />
            <span className="hidden md:inline-block">Go back</span>
          </Link>
          <div className="flex flex-wrap justify-start items-center md:justify-center gap-4">
            <button
              type="button"
              className="flex bg-neutral-50 dark:bg-neutral-700/40 items-center justify-center gap-3 border dark:border-neutral-700 text-red-500 rounded-lg py-1 px-3   capitalize"
              onClick={() => handleDelete(id!)}
            >
              <Trash className="w-4" />
              <span>{deletePending ? "deleteing" : "delete"}</span>
            </button>
            <button
              className="flex py-1 px-3  items-center justify-center dark:border-neutral-700/60 dark:bg-neutral-700/40 border-neutral-200 gap-3 border rounded-lg text-black dark:text-white capitalize "
              type="submit"
              onClick={() => setValue("state", "draft")}
            >
              <Save className="w-4" />
              <span>draft</span>
            </button>
            <button
              className="flex bg-black dark:bg-white items-center justify-center gap-3 border rounded-lg text-white py-1 px-3  dark:text-black capitalize"
              onClick={() => setValue("state", "published")}
            >
              <Eye className="w-4" />
              <span>{isPending ? "updateing" : "update"}</span>
            </button>
          </div>
        </div>
        <div className="flex dark:bg-neutral-700/50 gap-1 bg-neutral-100 my-4 py-1 px-1 rounded-lg">
          <button
            type="button"
            onClick={handleMode}
            className={`w-full rounded-lg py-1 ${
              mode && "dark:bg-neutral-800 bg-neutral-200"
            }  text-center`}
          >
            edit
          </button>
          <button
            type="button"
            onClick={handleMode}
            className={`w-full rounded-lg py-1 ${
              !mode && "dark:bg-neutral-800 bg-neutral-200 "
            } text-center`}
          >
            preiview
          </button>
        </div>
        {/* input section */}
        {mode ? (
          <>
            <div className="p-6 border dark:border-neutral-700/60 border-neutral-100 rounded-xl">
              <h2 className="text-xl dark:text-white capitalize pb-5">
                blog details
              </h2>
              <div className="flex flex-col w-full">
                <span className="capitalize">title</span>
                <input
                  className="w-full p-2 border border-neutral-200 dark:border-neutral-700/90 my-2 outline-none focus:outline-none focus:ring-1 focus:ring-neutral-400 transition duration-300 ease-in-out rounded-sm "
                  {...register("title")}
                  type="text"
                  placeholder="title"
                />
              </div>
              <div className="flex flex-col w-full">
                <span className="capitalize">description</span>
                <input
                  className="w-full p-2 border border-neutral-200 dark:border-neutral-700/90 my-2 outline-none focus:outline-none focus:ring-1 focus:ring-neutral-400 transition duration-300 ease-in-out rounded-sm "
                  {...register("description")}
                  type="text"
                  placeholder="description"
                />
              </div>
              <div className="flex flex-col w-full">
                <span className="capitalize">tags</span>
                <input
                  className="w-full p-2 border border-neutral-200 dark:border-neutral-700/90 my-2 outline-none focus:outline-none focus:ring-1 focus:ring-neutral-400 transition duration-300 ease-in-out rounded-sm "
                  onChange={(e) => {
                    const tagsArray = e.target.value
                      .split(",")
                      .map((tag) => tag.trim())
                      .filter((tag) => tag.length > 0);

                    setValue("tags", tagsArray);
                  }}
                  type="text"
                  placeholder="tags"
                />
              </div>
            </div>
            <div className="p-6 mt-5 border dark:border-neutral-700/60 border-neutral-100 rounded-xl">
              <h2 className="text-xl dark:text-white capitalize pb-2">
                content
              </h2>
              <p className="mb-4 dark:text-neutral-500">
                You can use Markdown formatting. Estimated reading time: 1
                minutes
              </p>
              <div className="flex flex-col w-full">
                <span className="capitalize">body</span>
                <textarea
                  className="w-full p-2 border border-neutral-200 dark:border-neutral-700/90 my-2 outline-none focus:outline-none focus:ring-1 focus:ring-neutral-400 transition duration-300 ease-in-out rounded-sm "
                  {...register("body")}
                  placeholder="body"
                />
              </div>
            </div>
          </>
        ) : (
          <Preview prvD={previewData} />
        )}
      </form>
    </div>
  );
};

export default BlogEditorForm;
