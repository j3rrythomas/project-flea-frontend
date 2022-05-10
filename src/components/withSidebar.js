import Sidebar from "./Sidebar";

const withSidebar = (Component) => {
  const AuthRoute = () => {
    return (
      <div className="min-h-screen w-full">
        <Sidebar />
        <Component />
      </div>
    );
  };
  return AuthRoute;
};

export default withSidebar;
