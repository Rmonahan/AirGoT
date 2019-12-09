import React from "react";
import { Link } from "react-router-dom";


export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <div>
          <div>Hello {currentUser.username}</div>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/signup" >Sign Up</Link>
          <Link to="/login" >Log In</Link>
        </div>
      )
    }
  }
};