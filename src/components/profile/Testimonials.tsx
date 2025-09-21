import { Award } from "lucide-react";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="py-20 px-4 bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center flex-col">
      <div className="flex py-1 dark:text-white dark:bg-neutral-700/20 dark:border-neutral-600/50 px-3 border border-neutral-300 rounded-full gap-2 bg-neutral-100/50">
        <Award className="w-4" /> <span>Loved by creators</span>
      </div>
      <h1 className="md:text-5xl text-3xl my-8 dark:text-white text-center font-bold">
        Everything you need to succeed
      </h1>
      <p className="text-neutral-300 mb-8 max-w-2xl text-center text-lg md:text-xl">
        See what our community has to say about their experience writing and
        reading on Plus.
      </p>
      {/* TODO: fetch real testimonials */}
    </div>
  );
};

export default Testimonials;
