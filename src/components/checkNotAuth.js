import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const checkNotAuth = (Component) => {
  // Higher Order Component that only displays component(that it takes as input) if it is authenticated
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
