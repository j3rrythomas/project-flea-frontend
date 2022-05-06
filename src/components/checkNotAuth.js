import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const checkNotAuth = (Component) => {
  const AuthRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
      return <Component />;
    }
    return <Navigate to="/" />;
  };
  return AuthRoute;
};

export default checkNotAuth;
