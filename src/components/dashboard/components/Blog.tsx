import Tags from "../../blogs/Feeds/Tags";
import { Link } from "react-router-dom";
import type { IBlog } from "../../../types/types";

interface Props {
  blog: IBlog;
}

const Blog: React.FC<Props> = ({ blog }) => {
  return (
    <div className="border dark:border-neutral-700 mb-6 mt-2 p-4 md:p-6 rounded-lg border-neutral-200">
      <div>
        <Link to={`/blogs/${blog._id}`}>
          <h2 className="text-xl pb-5 dark:text-white font-semibold">
            {blog.title}
          </h2>
        </Link>
        <h3 className="text-neutral-500 pb-6 dark:text-neutral-300">
          {blog.description}
        </h3>
      </div>
      <div className="flex gap-2">
        {blog?.tags.map((tag: string) => (
          <Tags key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
