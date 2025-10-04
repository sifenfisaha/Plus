import React from "react";
import type { blogInput } from "../../../utils/validationSchemas";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const Preview: React.FC<{ prvD: blogInput | null }> = ({ prvD }) => {
  return (
    <div>
      {prvD && (
        <div>
          <h1 className="text-2xl font-semibold dark:text-white">
            {prvD.title}
          </h1>
          <p className="dark:text-neutral-400 text-xl py-2">
            {prvD.description}
          </p>
          {/* <p className="dark:text-neutral-100">{blog.body}</p> */}
          {/* TODO : making the markdown work */}
          <article className="dark:text-white  max-w-none break-words1  ">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {prvD.body}
            </ReactMarkdown>
          </article>
        </div>
      )}
    </div>
  );
};

export default Preview;
