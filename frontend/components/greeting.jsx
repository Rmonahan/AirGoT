import React from "react";
import {Link} from "react-router-dom";
import NavDropdown  from "./nav_dropdown";
import PortfolioDropdown from "./portfolio_dropdown";
import SearchBar from "./search_bar";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <nav className="loggedIn">
          <div className="welcome">
            <Link to="/">
              <img id="logoImage" src={window.logoImage} />
            </Link>
            <SearchBar />
          </div>
          <PortfolioDropdown navType="loggedinPortfolio"/>
          <NavDropdown logout={this.props.logout} currentUser = {currentUser}/>
        </nav>
      );
    } else {
      return (
        <nav className="greeting-modal">
          <div className="welcome"> 
            <Link to="/">
              <img id="logoImage" src={window.logoImage} />
            </Link>
            <SearchBar />
          </div>
          <PortfolioDropdown navType="loggedoutPortfolio"/>
          <button onClick={() => this.props.openModal('signup')}>Sign up</button>
          <button onClick={() => this.props.openModal('login')}>Log in</button>
        </nav>
      );
    }
  }
};