import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isLogged,
  role,
  authority,
  ...rest
}) => {
  const conditionalRender = (props) => {
    if (isLogged) {
      if (authority && authority.includes(role)) {
        return <Component {...props} />;
      }
      return <Redirect to="/auth/register" />;

      // return <Redirect page access not authorized />;
    }
    return <Redirect to="/auth/login" />;
  };

  return <Route {...rest} render={(props) => conditionalRender(props)} />;
};
const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
    role: state.auth.role,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
