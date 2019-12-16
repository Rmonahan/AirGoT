import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(e){
    if(e.key === "Enter") {
      this.props.history.push("/spots");
    }
  }

  render() {
    return (
      <div className="searchBar">
        <div className="searchIcon"><i className="fas fa-search"></i></div>
        <input onKeyDown={this.handleEnter} type="text" placeholder='Try "Winterfell"' />
      </div>
    );
  }
}

export default withRouter(SearchBar)