import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SearchBar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder='Try "Winterfell"' />
      </div>
    );
  }
}