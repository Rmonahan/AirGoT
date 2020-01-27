import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "./nav_dropdown";
import PortfolioDropdown from "./portfolio_dropdown";
import SearchBar from "./search_bar";

export default class GreetingNonHomepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, updateFilter } = this.props;
    if (currentUser) {
      return (
        <nav className="loggedIn navnonHomepage">
          <div className="welcome">
            <Link to="/">
              <img id="logoImage" src={window.logoImage} />
            </Link>
            <SearchBar updateFilter={updateFilter} />
          </div>
          <PortfolioDropdown navType="loggedinPortfolioNonHomepage" />
          <NavDropdown logout={this.props.logout} currentUser={currentUser} />
        </nav>
      );
    } else {
      return (
        <nav className="greeting-modal navnonHomepage">
          <div className="welcome">
            <Link to="/">
              <img id="logoImage" src={window.logoImage} />
            </Link>
            <SearchBar updateFilter={updateFilter} />
          </div>
          <PortfolioDropdown navType="loggedoutPortfolioNonHomepage" />
          <button onClick={() => this.props.openModal('signup')}>Sign up</button>
          <button onClick={() => this.props.openModal('login')}>Log in</button>
        </nav>
      );
    }
  }
}