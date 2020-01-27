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
                       focusedInput: null,
                       city: "",
                       filteredOptions: [],
                       showOptions: false,
                       guests: 0
                      };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.numGuests = this.numGuests.bind(this);
      }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.city !== "") this.props.updateFilter("city", this.state.city);
    if (this.state.guests > 0) this.props.updateFilter("guests", this.state.guests);
    if (this.state.endDate !== null && this.state.startDate !== null) this.props.updateFilter("bookingRange", { startDate: this.state.startDate._d.toDateString(), endDate: this.state.endDate._d.toDateString()});
    this.props.history.push("/spots");
  }

  numGuests(n){
    this.setState({guests: n});
  }

  updateField(e,field) {
   if (field === "city"){
    const options = ["Winterfell", "Dragonstone", "King's Landing", "Dorne", "Castle Black", "Vaes Dothrak", "Casterly Rock", "Riverrun", "Lannister"]
    this.setState({ city: e.target.value });
    let filtered = options.filter((option) => option.toLowerCase().startsWith(e.target.value.toLowerCase()));
    this.setState({ filteredOptions: filtered })
    if (e.target.value != "") {
      this.setState({ showOptions: true });
    } else
      this.setState({ showOptions: false })
   }
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ city: e.target.innerText });
    this.setState({ showOptions: false });
  }

  render() {

    let optionDropDown;
    if (this.state.showOptions) {
      optionDropDown = <ul className="suggestionsForm">
        {this.state.filteredOptions.map((option, i) => <li key={i} onClick={this.handleClick}>{option}</li>)}
      </ul>
    }

    return (
    <div className="searchFormDiv">
      <form onSubmit={this.handleSubmit} className="searchForm">
        <h1>Book unique places to stay and things to do. </h1>
        <label>WHERE
        <input className="anywhere" onChange={(e) => this.updateField(e,"city")} type="text" placeholder="Anywhere" value={this.state.city}/>
        </label>
          {optionDropDown}
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
            <GuestsDropDown arrowType="guestsArrow" numGuests={this.numGuests}/>
          </label>
        <button type="submit">Search</button>
      </form>
    </div>
    );
  }
}

export default SearchForm;