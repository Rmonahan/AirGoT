import React from "react";
import SpotsMap from "./spots_map";
import GreetingContainerNonHomepage from "../greetings_container_non_homepage";
import { Route, Link } from "react-router-dom";
import {withRouter} from "react-router-dom";
import BookingForm from "./booking_form";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';


class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
    
  }

  componentWillMount(){
    this.props.fetchSpots();
  }

  render() {
    const {spot} = this.props;
    debugger;
    if (spot){
      return (
        <div>
          <header>
            <Link to="/" className="header-link"></Link>
            <GreetingContainerNonHomepage />
          </header>
          <div className="imageDiv">
            <img className="image1" src={spot.photoUrls[0]} />
            <img className="image2" src={spot.photoUrls[1]} />
            <img className="image3" src={spot.photoUrls[2]} />
            <img className="image4" src={spot.photoUrls[3]} />
            <img className="image5" src={spot.photoUrls[4]} />
          </div>
          <div className="spotShow">
            <div className="spotShowDetails">
              <div className="spotTitle">{spot.title} <img className="hostImage" src={spot.hostImageUrl} /></div>
                <span className="hostName">{spot.hostName}</span>
                <div className="descriptionItems">
                  <div className="spotCity">{spot.city}</div>
                  <div className="spotdetailsInfo">{spot.maxOccupants} guests - {spot.numberOfBedrooms} bedroom(s) - {spot.numberOfBeds} bed(s)- {spot.numberOfBathrooms} bath(s)</div>
                </div>
                <div className="bulletPoints">
                  <p>
                  <span>Entire home</span><br></br>
                        You’ll have the apartment to yourself.<br></br>
                        <br></br>
                  <span>Self check-in</span><br></br>
                        Check yourself in with the lockbox.<br></br>
                        <br></br>
                  <span>Great location</span><br></br>
                        100% of recent guests gave the location a 5-star rating. <br></br>
                        <br></br>
                  <span>Great check-in experience </span><br></br>
                        90% of recent guests gave the check-in process a 5-star rating. <br></br>
                  </p>
                </div>
                <div className="spotDescription">{spot.description}</div>
                  <p className="availability">Availability</p>
                  <div className="dayPicker">
                    <DayPickerRangeController
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                      focusedInput={this.state.focusedInput}
                      onFocusChange={focusedInput => this.setState({ focusedInput })} 
                      initialVisibleMonth={() => moment().add(2, "months")}
                      numberOfMonths={2}
                    />
                </div>
             </div>
            <div className="bookingForm">
             <BookingForm spot={spot} />
            </div>
         </div>
         </div>
      );
    } else{
      return <div></div>
    }
    }
}

export default withRouter(SpotShow)