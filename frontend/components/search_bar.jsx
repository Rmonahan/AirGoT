import React from "react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "", 
      active: 0,
      filteredOptions: [],
      showOptions: false
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  updateField(e){
    const options = ["Winterfell", "Dragonstone", "King's Landing", "Dorne", "Castle Black", "Vaes Dothrak", "Casterly Rock", "Riverrun", "Lannister"]
    this.setState({city: e.target.value});
    let filtered = options.filter((option) => option.toLowerCase().startsWith(e.target.value.toLowerCase()));
    if (filtered.length > 0) {
      this.setState({ filteredOptions: filtered })
    } else {
      this.setState({ filteredOptions: options })
    }
    if (e.target.value != ""){
      this.setState({showOptions: true});
    } else 
      this.setState({showOptions: false})
  }

  handleEnter(e){
    if(e.key === "Enter") {
      this.props.history.push("/spots");
      this.props.updateFilter("city", this.state.city);
      this.setState({ showOptions: false });
    }
  }

  handleClick(e){
    e.preventDefault();
    this.props.history.push("/spots");
    this.props.updateFilter("city", e.target.innerText);
    this.setState({city: e.target.innerText});
    this.setState({showOptions: false });
  }

  render() {
    let optionDropDown;
    if (this.state.showOptions){
      optionDropDown = <ul className="suggestions"> 
      {this.state.filteredOptions.map((option, i) => <li key={i} onClick={this.handleClick}>{option}</li>)}
      </ul>
    }
    return (
      <div className="searchBar">
        <div className="searchIcon"><i className="fas fa-search"></i></div>
        <input onKeyDown={this.handleEnter} onChange={this.updateField} type="text" placeholder='Try "Winterfell"' value={this.state.city}/>
        {optionDropDown}
      </div>
    );
  }
}

export default withRouter(SearchBar)