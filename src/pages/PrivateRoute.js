import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// children is <Checkout /> and ...rest is other things in the component, i.e., exact path='/checkout'
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0();

  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
