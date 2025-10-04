import React from "react";
import BlogEditorForm from "./componets/BlogEditorForm";

const Layout: React.FC = () => {
  return (
    <div className="dark:text-white md:px-50 py-10 mx-5 sm:px-20">
      <BlogEditorForm />
    </div>
  );
};

export default Layout;
