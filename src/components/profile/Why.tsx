import { BookOpenIcon, Globe, Sparkle, TrendingUp, Users } from "lucide-react";
import React from "react";
import Card, { type Props } from "./ui/Card";

const data: Props[] = [
  {
    title: "Rich Content",
    dis: "Write with markdown support, embed images, and create beautiful articles.",
    icon: <BookOpenIcon className="text-blue-600" />,
  },
  {
    title: "Community",
    dis: "Connect with like-minded writers and readers from around the world.",
    icon: <Users className="text-purple-600" />,
  },
  {
    icon: <TrendingUp className="text-green-600" />,
    title: "Analytics",
    dis: "Track your performance with detailed insights and engagement metrics.",
  },
  {
    title: "Global Reach",
    dis: "Share your stories with a worldwide audience of passionate readers.",
    icon: <Globe className="text-orange-600" />,
  },
];

const Why: React.FC = () => {
  return (
    <div className="pb-20 pt-10 px-4 dark:bg-[radial-gradient(circle,_rgba(20,20,20,1)_0%,_rgba(0,0,0,1)_100%)] flex items-center justify-center flex-col">
      <div className="flex py-1 dark:text-white dark:bg-neutral-700/20 dark:border-neutral-600/50 px-3 border border-neutral-300 rounded-full gap-2 bg-neutral-100/50">
        <Sparkle className="w-4" /> <span>Why choose Plus?</span>
      </div>
      <h1 className="md:text-5xl text-3xl my-8 dark:text-white text-center font-bold">
        Everything you need to succeed
      </h1>
      <p className="text-neutral-300 mb-8 max-w-2xl text-center text-lg md:text-xl">
        From writing tools to community engagement, we provide everything you
        need to build your audience and share your voice.
      </p>
      <div className="flex md:flex-row flex-col gap-8 md:px-40 py-10">
        {data.map((d) => (
          <Card dis={d.dis} icon={d.icon} title={d.title} key={d.title} />
        ))}
      </div>
    </div>
  );
};

export default Why;
