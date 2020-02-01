import React from "react";

export default class GuestsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      guests: this.props.guests
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdownBlur = this.toggleDropdownBlur.bind(this);
    this.increaseGuests = this.increaseGuests.bind(this);
    this.decreaseGuests = this.decreaseGuests.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.guests !== prevProps.guests) {
      this.setState({ guests: this.props.guests })
    }
  }

  toggleDropdown(e) {
    debugger;
    if (e.target === null || (e.target.className != "adults" && e.target.className != "guestChange" && e.target.className != "guestsUl")) {
      this.setState({ open: !this.state.open });
    }
  }

  toggleDropdownBlur(e) {
    if (this.state.open === true) {
      if (e.relatedTarget === null || (e.relatedTarget.className != "guestsFilterDiv" && e.relatedTarget.className != "guestChange")) {
        this.setState({ open: !this.state.open });
      }
    }
  }

  increaseGuests(e) {
    this.setState({ guests: this.state.guests + 1 });
    this.props.updateFilter("guests", this.state.guests + 1);
  }

  decreaseGuests(e) {
    if (this.state.guests > 0) {
      this.setState({ guests: this.state.guests - 1 });
      this.props.updateFilter("guests", this.state.guests - 1);
    }
  }



  render() {
    let minusDisabled = "minusDisabled";
    if (this.state.guests > 0) {
      minusDisabled = "minusAbled";
    }

    let guestsText = "Guests";
    if (this.state.guests === 1) {
      guestsText = "1 guest";
    }
    else if (this.state.guests > 1) {
      guestsText = `${this.state.guests} guests`
    }
    return (
      <div className="guestsFilterDiv" onBlur={this.toggleDropdownBlur} onClick={this.toggleDropdown} tabIndex="0">
        <button className="guestsFilterButton" onClick={(e) => e.preventDefault()}>{guestsText}</button>
        {this.state.open && (
          <ul className="guestsUl guestsFilterUl" >
            <li className="adults"> <h1 className="adults">Adults</h1>
              <button className="guestChange" id={minusDisabled} onClick={this.decreaseGuests}>-</button>
              <p className="adults"> {this.state.guests}+ </p>
              <button className="guestChange" onClick={this.increaseGuests}>+</button>
            </li>
          </ul>
        )}
      </div>
    );
  }
}