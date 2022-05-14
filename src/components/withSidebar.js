import Sidebar from "./Sidebar";

const withSidebar = (Component) => {
  const AuthRoute = () => {
    return (
      <div className="min-h-screen w-full relative">
        <Sidebar />
        <Component />
      </div>
    );
  };
  return AuthRoute;
};

export default withSidebar;
