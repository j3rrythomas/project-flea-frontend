import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const checkNotAuth = (Component) => {
  const AuthRoute = () => {
    const { isAuthenticated, role } = useSelector((state) => state.auth);
    if (!isAuthenticated) {
      return <Component />;
    }
    return role === "CUSTOMER" ? (
      <Navigate to="/" />
    ) : (
      <Navigate to="/vendor-home" />
    );
  };
  return AuthRoute;
};

export default checkNotAuth;
