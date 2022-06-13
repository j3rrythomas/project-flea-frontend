import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const checkAuth = (Component, type) => {
  const AuthRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const role = useSelector((state) => state.auth.role);
    if (isAuthenticated) {
      if (role === "VENDOR" || type === role) return <Component />;
      else {
        return <Navigate to="/errorPage" />;
      }
    }
    return <Navigate to="/" />;
  };
  return AuthRoute;
};

export default checkAuth;
