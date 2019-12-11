import React from "react";

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
<<<<<<< HEAD
        <div>
          <Link to="/signup" >Sign Up</Link>
          <br></br>
          <Link to="/login" >Log In</Link>
        </div>
=======
        <nav className="greeting-modal">
          <div> Welcome to AirGoT</div>
          <button onClick={() => this.props.openModal('signup')}>Sign up</button>
          <button onClick={() => this.props.openModal('login')}>Log in</button>
        </nav>
>>>>>>> UserAuth
      )
    }
  }
};