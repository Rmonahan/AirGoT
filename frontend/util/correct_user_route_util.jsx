import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import React from "react";


const CorrectUser = ({ component: Component, path, correctUser, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      correctUser ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = (state, ownProps) => {
  const locationArray = ownProps.location.pathname.split("/");
  let bookingUserId = parseInt(locationArray[locationArray.length - 2]);
  if (locationArray.length === 5){
    bookingUserId = parseInt(locationArray[locationArray.length - 3]);
  }

  return {
    correctUser: (state.session.id === bookingUserId)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CorrectUser)
);