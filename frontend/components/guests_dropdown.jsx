import React from "react";

export default class GuestsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      guests: 0
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
    this.increaseGuests = this.increaseGuests.bind(this);
    this.decreaseGuests = this.decreaseGuests.bind(this);
  }

  toggleDropdown(e) {
    this.setState({ open: !this.state.open });
  }

  toggleDropdownBlur(e) {
    if (this.state.open === true) {
      this.setState({ open: !this.state.open });
    }
  }

  increaseGuests(e){
    debugger;
    e.preventDefault();
    this.setState({guests: this.state.guests + 1});
  }

  decreaseGuests(e) {
    e.preventDefault();
    this.setState({ guests: this.state.guests - 1 });
  }



  render() {
    let icon = <i className="fas fa-chevron-down"></i>;
    if (this.state.open){
      icon = <i className="fas fa-chevron-up"></i>;
    }
    return (
      <div className="guestsnavbarDiv" onBlur={this.toggleDropdownBlur} onFocus={this.toggleDropdown} tabIndex="0">
        <button className="guestsSelect" onClick={(e) => e.preventDefault()}>Guests</button>
        <div className="guestsArrow">{icon}</div>
        {this.state.open && (
          <ul className="guestsUl" >
            <li> <h1>Adults</h1>
                <button onClick={this.decreaseGuests}>-</button>
                <p> {this.state.guests}+ </p>
                <button onClick={this.increaseGuests}>+</button>
            </li>
          </ul>
        )}
      </div>
    );
  }
}