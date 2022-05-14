import Navbar from "./Navbar";

const withNavbar = (Component) => {
  const AuthRoute = () => {
    return (
      <div className="h-screen w-full">
        <Navbar />
        <Component />
      </div>
    );
  };
  return AuthRoute;
};

export default withNavbar;
