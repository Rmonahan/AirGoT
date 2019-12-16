import React from "react";
import SpotIndexHomepageContainer from "./spots/spots_index_homepage_container";
import SearchForm from "./search_form";
import GreetingContainer from "./greeting_container";
import { Route, Link } from "react-router-dom";


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
        <SearchForm />
        <img id="background" src={window.backgroundImage} />
        <SpotIndexHomepageContainer />
      </div>
    );
  }
}