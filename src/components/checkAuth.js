import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const checkAuth = (Component) => {
  const AuthRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (isAuthenticated) {
      return <Component />;
    }
    return <Navigate to="/login" />;
  };
  return AuthRoute;
};

export default checkAuth;
