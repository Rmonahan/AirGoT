import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import React from "react";


const CorrectUser = ({ component: Component, path, correctUser, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !correctUser ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = (state, ownProps) => {
  const locationArray = ownProps.location.pathname.split("/");
  const bookingUserId = locationArray[locationArray.length - 2];
  return {
    correctUser: Boolean(state.session.id === bookingUserId)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CorrectUser)
);