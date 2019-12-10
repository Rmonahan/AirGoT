import React from "react";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <div>
          <div>Hello {currentUser.email}</div>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      )
    } else {
      return (
        <nav className="greeting-modal">
          <button onClick={() => this.props.openModal('login')}>Log in</button>
          &nbsp;or&nbsp;
      <button onClick={() => this.props.openModal('signup')}>Sign up</button>
        </nav>
      )
    }
  }
};