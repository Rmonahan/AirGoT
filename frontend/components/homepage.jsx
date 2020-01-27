import React from "react";
import SpotIndexHomepageContainer from "./spots/spots_index_homepage_container";
import GreetingContainer from "./greeting_container";
import { Route, Link } from "react-router-dom";
import SearchFormContainer from "./search_form_container";


export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="header-link"></Link>
          <GreetingContainer />
        </header>
        <SearchFormContainer />
        <img id="background" src={window.backgroundImage} />
        <SpotIndexHomepageContainer />
      </div>
    );
  }
}