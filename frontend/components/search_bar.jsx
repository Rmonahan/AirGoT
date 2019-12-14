import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchBar">
        <div className="searchIcon"><i className="fas fa-search"></i></div>
        <input type="text" placeholder='Try "Winterfell"' />
      </div>
    );
  }
}