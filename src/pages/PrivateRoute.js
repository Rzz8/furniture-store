import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// children is <Checkout /> and ...rest is other things in the component, i.e., exact path='/checkout'
const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
export default PrivateRoute;
