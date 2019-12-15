import React from "react";

export default class GuestsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
  }

  toggleDropdown(e) {
    this.setState({ open: !this.state.open });
  }

  toggleDropdownBlur(e) {
    if (this.state.open === true) {
      this.setState({ open: !this.state.open });
    }
  }


  render() {
    let icon = <i className="fas fa-chevron-down"></i>;
    if (this.state.open){
      icon = <i className="fas fa-chevron-up"></i>;
    }
    return (
      <div className="guestsnavbarDiv" onBlur={this.toggleDropdownBlur} onFocus={this.toggleDropdown} tabIndex="0">
        <button className="guestsSelect">Guests</button>
        <div className="guestsArrow">{icon}</div>
        {this.state.open && (
          <ul className="guestsUl" >
            <li> <h1>Adults</h1>
                <button>-</button>
                <p> 0+ </p>
                <button>+</button>
            </li>
          </ul>
        )}
      </div>
    );
  }
}