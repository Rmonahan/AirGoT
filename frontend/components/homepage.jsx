import React from "react";
import SpotIndexHomepageContainer from "./spots/spots_index_homepage_container";
import SearchForm from "./search_form";


export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchForm />
        <img id="background" src={window.backgroundImage} />
        <SpotIndexHomepageContainer />
      </div>
    );
  }
}