import React from "react";
import {Link} from "react-router-dom";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <div className="loggedIn">
          <div>Hello {currentUser.email}</div>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      )
    } else {
      return (
        <nav className="greeting-modal">
          <div className="welcome"> 
           <button onClick={() => <Link to="/" />}>
              <img id="logoImage" src={window.logoImage} />
            </button>
          </div>
          <button onClick={() => this.props.openModal('signup')}>Sign up</button>
          <button onClick={() => this.props.openModal('login')}>Log in</button>
        </nav>
      )
    }
  }
};