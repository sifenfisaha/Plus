import { useRef, useEffect, useState } from "react";
import { useInfiniteBlogs } from "../../../features/blogs/hooks";
import FilterNav from "./FilterNav";
import Blog from "./Blog";
import BlogSkeleton from "./BlogSkeleton";
import { useAppSelector } from "../../../app/hooks";

export default function BlogList() {
  const [sortBy, setSortBy] = useState<string>("all");
  
  const {query} = useAppSelector(s => s.blog)
  const {tags }= useAppSelector(s => s.blog)
  const queryTags =  tags.join(' ') 
  
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteBlogs(sortBy, query, queryTags);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="flex-1">
      <FilterNav onClick={setSortBy} />
      <div
        className="
      "
      >
        {isLoading && (
          <>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </>
        )}
        {data?.pages.map((page, i) => (
          <div key={i}>
            {page.blogs.map((blog: {_id: string}) => (
              <Blog key={blog._id} blog={blog} />
            ))}
          </div>
        ))}
        <div
          ref={loadMoreRef}
          className="flex flex-col items-center justify-center"
        >
          {isFetchingNextPage ? (
            <>
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </>
          ) : hasNextPage ? (
            <div className="flex items-center justify-center py-6">
              <div className="h-px w-1/4 bg-neutral-300 dark:bg-neutral-700"></div>
              <span className="px-4 text-sm text-neutral-500 dark:text-neutral-400">
                Scroll to load more
              </span>
              <div className="h-px w-1/4 bg-neutral-300 dark:bg-neutral-700"></div>
            </div>
          ) : (
            <div className="flex items-center justify-center py-6">
              <div className="h-px w-1/4 bg-neutral-300 dark:bg-neutral-700"></div>
              <span className="px-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
                No more blogs
              </span>
              <div className="h-px w-1/4 bg-neutral-300 dark:bg-neutral-700"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
