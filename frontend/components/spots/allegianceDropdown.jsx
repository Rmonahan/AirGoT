import React from "react";



export default class AllegianceDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allegiance: "Allegiance",
      open: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
    this.filterAllegiance = this.filterAllegiance.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.allegiance !== prevProps.allegiance){
      this.setState({ allegiance: this.props.allegiance })
    }
  }

  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  toggleDropdownBlur() {
    if (this.state.open === true) {
      this.setState({ open: !this.state.open });
    }
  }

  filterAllegiance(e){
    this.setState({allegiance: e.target.innerText});
    this.props.updateFilter("allegiance", e.target.innerText);
  }

  render() {
    return (
      <div className="allegianceButton" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
        {this.state.allegiance}
        {this.state.open && (
          <ul>
            <li onClick={this.filterAllegiance}>All
                  <div id="borderbot" />
            </li>
            <li onClick={this.filterAllegiance}>Baratheons
                  <div id="borderbot" />
            </li>
            <li onClick={this.filterAllegiance}>Dothraki
                  <div id="borderbot" />
            </li>
            <li onClick={this.filterAllegiance}>Lannisters
                  <div id="borderbot" />
            </li>
            <li onClick={this.filterAllegiance}>Martell
                  <div id="borderbot" />
            </li>
            <li onClick={this.filterAllegiance}>Starks
                  <div id="borderbot" />
            </li>
            <li onClick={this.filterAllegiance}>None
                  <div id="borderbot" />
            </li>
          </ul>
        )}
      </div>
    )
  }
}