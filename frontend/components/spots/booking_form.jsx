import React from "react";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import GuestsDropDown from "../guests_dropdown";
import { withRouter } from "react-router-dom";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push("/booking");
  }



  render() {
    return (
      <div className="bookingFormDiv">
        <form onSubmit={this.handleSubmit} className="searchForm">
          
          <div> <span className="bookingformPrice">${this.props.spot.price}</span><span className="perNight">per night</span></div>
          <div className="bookingRating"><span className="skull"><i className="fas fa-skull"></i></span>{this.props.spot.dangerRating}</div>
          <label className="bookingDateRange">Dates
            <DateRangePicker
              startDatePlaceholderText="Check-in"
              endDatePlaceholderText="Checkout"
              block={true}
              startDate={this.state.startDate}
              startDateId="datepicker_start_search_form"
              endDate={this.state.endDate}
              endDateId="datepicker_end_search_form"
              noBorder={true}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
          </label>
          <label className="guests BookingFormGuest">Guests
            <GuestsDropDown arrowType="bookingArrow"/>
          </label>
          <button className="bookingSubmit" type="submit">Reserve</button>
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);