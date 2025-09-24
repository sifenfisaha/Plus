import BlogList from "./Feeds/BlogList";
import SideBar from "./Sidebar/SideBar";

const Layout: React.FC = () => {
  return (
    <div className="md:px-40 px-10 c:h-[calc(100vh-80px)] flex flex-col c:flex-row gap-15">
      <main className="flex-1 no-scrollbar overflow-y-auto">
        <BlogList />
      </main>

      <aside className="md:w-[350px] w-full no-scrollbar overflow-y-auto">
        <SideBar />
      </aside>
    </div>
  );
};

export default Layout;
