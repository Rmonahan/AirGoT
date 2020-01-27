import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {city:""};
    this.handleEnter = this.handleEnter.bind(this);
    this.updateField = this.updateField.bind(this);
  }
  
  updateField(e){
    this.setState({city: e.target.value}) ;
  }

  handleEnter(e){
    if(e.key === "Enter") {
      this.props.history.push("/spots");
      this.props.updateFilter("city", this.state.city)
    }
  }

  render() {
    return (
      <div className="searchBar">
        <div className="searchIcon"><i className="fas fa-search"></i></div>
        <input onKeyDown={this.handleEnter} onChange={this.updateField} type="text" placeholder='Try "Winterfell"' value={this.state.city}/>
      </div>
    );
  }
}

export default withRouter(SearchBar)