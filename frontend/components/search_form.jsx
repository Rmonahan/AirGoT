import React from "react";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import GuestsDropDown from "./guests_dropdown";
import {withRouter} from "react-router-dom";

class SearchForm extends React.Component {
      constructor(props){
        super(props);
        this.state = { startDate: null,
                       endDate: null,
                       focusedInput: null
                      };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(e){
      e.preventDefault();
      this.props.history.push("/spots");
    }

  
  
  render() {
    return (
    <div className="searchFormDiv">
      <form onSubmit={this.handleSubmit} className="searchForm">
        <h1>Book unique places to stay and things to do. </h1>
        <label>WHERE
        <input className="anywhere" type="text" placeholder="Anywhere"/>
        </label>
        <label className="daterange">CHECK-IN <p>CHECK-OUT</p>
         <DateRangePicker
            startDatePlaceholderText = "mm/dd/yyyy"
            endDatePlaceholderText="mm/dd/yyyy"
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
          <label className="guests">GUESTS
            <GuestsDropDown arrowType="guestsArrow"/>
          </label>
        <button type="submit">Search</button>
      </form>
    </div>
    );
  }
}

export default withRouter(SearchForm);