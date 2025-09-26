import {
  Code,
  Github,
  Heart,
  Linkedin,
  MailIcon,
  Send,
  Star,
  TrendingUp,
  Twitter,
} from "lucide-react";
import React from "react";
import {
  useInfiniteBlogs,
  usePopularTags,
} from "../../../features/blogs/hooks";
import Tags from "../Feeds/Tags";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addTag, removeTag } from "../../../features/blogs/blogSlice";

const SideBar: React.FC = () => {
  const { data, isLoading } = useInfiniteBlogs("trending");
  const { data: res, isLoading: tagsLoading } = usePopularTags();
  const {tags} = useAppSelector(s => s.blog)
  const dispatch = useAppDispatch()
  
  const addTags = (tag: string) => {
   dispatch(addTag(tag))
  }

  const removeTags = (tag: string) => {
    console.log(tag)
    dispatch(removeTag(tag))
  }
  

  return (
    <div className="space-y-6 mt-3">
      <div className="p-6 flex flex-wrap gap-3">
        {tags.map((tag:  string, i: number) => (
              <button key={i} onClick={() => removeTags(tag)}><Tags key={i} tag={tag} /></button>
            ))}
      </div>
       <div className="w-full p-6 border dark:border-neutral-700 rounded-lg border-neutral-700/20">
        <h2 className="text-lg flex gap-2 items-center justify-start dark:text-white">
          <Star className="inline-block w-4" /> <span>Popular Tags</span>
        </h2>
        {tagsLoading ? (
          <ul className="flex flex-wrap gap-4 items-center justify-center pt-6">
            {[...Array(6)].map((_, i) => (
              <li
                key={i}
                className="h-6 w-16 rounded-full bg-neutral-300 dark:bg-neutral-700 animate-pulse"
              ></li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-wrap gap-4 items-center justify-center pt-6">
            {res?.tags.map((tag: {tag: string}, i: number) => (
              <button key={i} onClick={() => addTags(tag.tag)}><Tags key={i} tag={tag.tag} /></button>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full p-6 border dark:border-neutral-700 rounded-lg border-neutral-700/20">
        <h2 className="text-lg flex gap-2 items-center justify-start dark:text-white">
          <TrendingUp className="inline-block w-4" />
          <span> Trending Blogs</span>
        </h2>
        {isLoading ? (
          <ul className="pt-6 space-y-4">
            {[...Array(4)].map((_, i) => (
              <li
                key={i}
                className={`mb-4 pb-3 border-b border-neutral-200 dark:border-neutral-700 animate-pulse`}
              >
                {/* Title */}
                <div className="h-5 w-3/4 bg-neutral-300 dark:bg-neutral-700 rounded mb-2"></div>

                {/* Author + likes */}
                <div className="flex items-center gap-2">
                  <div className="h-3 w-24 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                  <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                  <div className="h-3 w-16 bg-neutral-300 dark:bg-neutral-700 rounded"></div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="pt-6">
            {data?.pages.map((page, i) => (
              <div key={i}>
                {page.blogs.map((blog: {title: string, author: {first_name: string, last_name: string}, likes: string}, i: number) => {
                  if (i < 4) {
                    return (
                      <li
                        className={` ${i === 3 ? "" : "mb-4 pb-3 border-b  border-neutral-200 dark:border-neutral-700"} `}
                        key={i}
                      >
                        <h3 className="dark:text-white">{blog.title}</h3>
                        <div className="dark:text-neutral-400 gap-2 text-neutral-600 flex items-center justify-start">
                          <div className="text-sm capitalize">
                            {`${blog.author.first_name} ${blog.author.last_name}`}
                          </div>
                          <span className="w-1 h-1 rounded-full bg-neutral-500 dark:bg-neutral-300 "></span>
                          <div>{`${blog.likes} likes`}</div>
                        </div>
                      </li>
                    );
                  }
                })}
              </div>
            ))}
          </ul>
        )}
      </div>
     
      <div className="w-full p-6 border dark:border-neutral-700 rounded-lg border-neutral-700/20">
        <h2 className="text-lg flex gap-2 items-center justify-start dark:text-white">
          <Code className="inline-block w-4" /> <span>Built with</span>{" "}
          <Heart className="w-4 text-red-500" fill="red" />
        </h2>
        <div className="dark:bg-neutral-800/80 bg-neutral-50 text-sm rounded-lg mt-4 p-4">
          <Link to="/">
            <h1 className="dark:text-white font-bold font-logo text-2xl">
              Plus
            </h1>
          </Link>
          <p className="dark:text-neutral-300 mt-4">
            Crafted by a passionate developer using modern web technologies.
            Built with React, TypeScript, and Tailwind CSS for a seamless
            blogging experience.
          </p>
          <div className="flex gap-2 py-4">
            <Tags tag="React" />
            <Tags tag="Tailwindcss" />
            <Tags tag="TypeScript" />
          </div>
          <div className="flex gap-4 py-4 items-center justify-start">
            <div className="w-10 capitalize flex items-center justify-center h-10 dark:bg-neutral-100 dark:text-black font-semibold text-lg rounded-full bg-neutral-800  text-white">
              {"SF"}
            </div>
            <div>
              <div className="font-semibold capitalize  dark:text-white">
                {`Sifen Fisaha`}
              </div>

              <p className="flex text-base gap-2 text-neutral-500 dark:text-neutral-300 items-center">
                Full stack developer
              </p>
            </div>
            <p> </p>
          </div>
          <p className=" text-neutral-500 dark:text-neutral-300 ">
            Available for freelance projects and full-time opportunities.
          </p>
          <div>
            <ul className="dark:text-white flex gap-3 justify-around py-5">
              <li>
                <a href="">
                  <Github className="w-5" />
                </a>
              </li>
              <li>
                <a href="">
                  <Linkedin className="w-5" />
                </a>
              </li>
              <li>
                <a href="">
                  <Twitter className="w-5" />
                </a>
              </li>
              <li>
                <a href="">
                  <Send className="w-5" />
                </a>
              </li>
              <li>
                <a href="">
                  <MailIcon className="w-5" />
                </a>
              </li>
            </ul>
          </div>
          <p className="dark:text-neutral-300 text-sm text-center">
            © 2024 • Made with care for the community
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
