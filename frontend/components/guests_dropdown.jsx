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
      if (e.relatedTarget === null || (e.relatedTarget.className != "guestsnavbarDiv" && e.relatedTarget.className != "guestChange")){
        this.setState({ open: !this.state.open });
      }
    }
  }

  increaseGuests(e){
    // e.preventDefault();
    this.setState({guests: this.state.guests + 1});
    this.props.numGuests(this.state.guests + 1);
  }

  decreaseGuests(e) {
    // e.preventDefault();
    if (this.state.guests > 0){
       this.setState({ guests: this.state.guests - 1 });
       this.props.numGuests(this.state.guests - 1);
    }
  }



  render() {
    let icon = <i className="fas fa-chevron-down"></i>;
    if (this.state.open){
      icon = <i className="fas fa-chevron-up"></i>;
    }
    let minusDisabled = "minusDisabled";
    if (this.state.guests > 0){
      minusDisabled = "minusAbled";
    }

    let guestsText = "Guests";
    if (this.state.guests === 1){
      guestsText = "1 guest";
    }
    else if (this.state.guests > 1){
      guestsText = `${this.state.guests} guests`
    }
    return (
      <div className="guestsnavbarDiv" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
        <button className="guestsSelect" onClick={(e) => e.preventDefault()}>{guestsText}</button>
        <div className={this.props.arrowType}>{icon}</div>
        {this.state.open && (
          <ul className="guestsUl" >
            <li> <h1>Adults</h1>
                <button className="guestChange" id={minusDisabled} onClick={this.decreaseGuests}>-</button>
                <p> {this.state.guests}+ </p>
                <button className="guestChange" onClick={this.increaseGuests}>+</button>
            </li>
          </ul>
        )}
      </div>
    );
  }
}