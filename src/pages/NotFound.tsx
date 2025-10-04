import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center dark:text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
