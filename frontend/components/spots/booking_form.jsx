import React from "react";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import GuestsDropDown from "../guests_dropdown";
import { withRouter } from "react-router-dom";
import moment from "moment/moment";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isOutsideRange = this.isOutsideRange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking({ booking: { user_id: this.props.userId, spot_id: this.props.spot.id, start_date: this.state.startDate.format('YYYY-MM-DD'), end_date: this.state.endDate.format('YYYY-MM-DD')}})
      .then((booking) => { this.props.history.push(`/users/${booking.booking.userId}/bookings/${booking.booking.id}`); }).then(this.props.closeModal);
  }

  isOutsideRange(day){
    if (moment().diff(day) > 0) {
      return true;
    }

    let disabled = false;

    const disabledDates = [];
       this.props.spot.bookings.forEach((booking) => {
          let currentDate = moment(booking.start_date);
          let endDate = moment(booking.end_date);

          while (currentDate <= endDate){
            disabledDates.push(moment(currentDate.format('YYYY-MM-DD')));
            currentDate = moment(currentDate).add(1,'days');
          }
      });

      disabledDates.forEach((date) => {
        if (date.isSame(day, 'date')){
          disabled = true;
        }
      });
      return disabled;
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
              startDate={this.state.startDate}
              startDateId="datepicker_start_search_form"
              endDate={this.state.endDate}
              endDateId="datepicker_end_search_form"
              noBorder={true}
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
              isOutsideRange = {this.isOutsideRange}
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