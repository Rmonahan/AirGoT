import React from "react";
import SpotsMap from "./spots_map";
import GreetingContainerNonHomepage from "../greetings_container_non_homepage";
import { Route, Link, NavLink } from "react-router-dom";
import {withRouter} from "react-router-dom";
import BookingFormContainer from "./booking_form_container";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import BookingFormFooter from './booking_form_footer';
import SpotShowMap from './spot_show_map';


class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: ["startDate"]
    };
    this.isOutsideRange = this.isOutsideRange.bind(this);
  }

  componentWillMount(){
    this.props.fetchSpots();
  }

  isOutsideRange(day) {
    if (moment().diff(day) > 0) {
      return true;
    }

    let disabled = false;

    const disabledDates = [];
    this.props.spot.bookings.forEach((booking) => {
      let currentDate = moment(booking.start_date);
      let endDate = moment(booking.end_date);

      while (currentDate <= endDate) {
        disabledDates.push(moment(currentDate.format('YYYY-MM-DD')));
        currentDate = moment(currentDate).add(1, 'days');
      }
    });

    disabledDates.forEach((date) => {
      if (date.isSame(day, 'date')) {
        disabled = true;
      }
    });
    return disabled;
  }

  render() {
    const {spot, spots} = this.props;
    if (spot){
          const guestPlural = spot.maxOccupants > 1 ? "guests" : "guest";
          const bedroomPlural = spot.numberOfBedrooms > 1 ? "bedrooms" : "bedroom";
          const bedPlural = spot.numberOfBeds > 1 ? "beds" : "bed";
          const bathPlural = spot.numberOfBathrooms > 1 ? "baths" : "bath";
      return (
        <div className="spotShowMainDiv">
          <header>
            <Link to="/" className="header-link"></Link>
            <GreetingContainerNonHomepage />
          </header>
          <div className="imageDiv">
            <div className="mainImage">
              <img className="image1" src={spot.photoUrls[0]} />
            </div>
            <div className="otherImages">  
              <div className="otherImagesDiv otherImagesDiv1"><img className="image2" src={spots[0].photoUrls[1]} /></div>
              <div className="otherImagesDiv otherImagesDiv2"><img className="image3" src={spots[0].photoUrls[2]} /></div>
              <div className="otherImagesDiv otherImagesDiv3"><img className="image4" src={spots[0].photoUrls[3]} /></div>
              <div className="otherImagesDiv otherImagesDiv4"><img className="image5" src={spots[0].photoUrls[4]} /></div>
            </div>
          </div>
          <div className="spotShow">
            <div className="spotShowDetails">
              <div className="spotTitle">{spot.title} </div>
              <img className="hostImage" src={spot.hostImageUrl} />
              <span className="hostName">{spot.hostName}</span>
            <div className="descriptionItemsShow">
                  <div className="spotCity">{spot.city}</div>
                  <div className="spotdetailsInfo">{spot.maxOccupants}{" "}{guestPlural} - {spot.numberOfBedrooms}{" "}{bedroomPlural} - {spot.numberOfBeds}{" "}{bedPlural} - {spot.numberOfBathrooms}{" "}{bathPlural}</div>
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
                  <div className="spotDescription"><h1 className="descriptText">Description</h1> <br></br>{spot.description}</div>
                <h1 className="amenitiesText">Amenities</h1>
                  <div className="spotAmenities">
                      <div className="showFirstIcon"><i className={spot.amenities[0].icon}></i></div>{spot.amenities[0].name} <div className="showSecondIcon"><i className={spot.amenities[1].icon}></i></div>{spot.amenities[1].name} 
                      <div className="showThirdIcon"><i className={spot.amenities[2].icon}></i></div>{spot.amenities[2].name}<div className="showThirdIcon"><i className={spot.amenities[3].icon}></i></div>{spot.amenities[3].name}
                  </div>
                  <p className="availability">Availability</p>
                  <div className="dayPicker">
                    <DayPickerRangeController
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                      focusedInput={this.state.focusedInput}
                      onFocusChange={focusedInput => this.setState({ focusedInput })} 
                      initialVisibleMonth={() => moment()}
                      numberOfMonths={2}
                      noBorder={true}
                      isOutsideRange={this.isOutsideRange}
              />
                <div className="hostDetails">
                  <h1 className="hostedBy">Hosted by {spot.host.first_name}</h1>
                        <p className="hostLocation">{spot.city},{" "}{spot.state} - Joined in December 2019</p>
                        <p className="hostDescription">{spot.host.description}</p>
                      <img className="hostImage hostDetailsImage" src={spot.hostImageUrl} />
                </div>
                </div>
                <SpotShowMap spot={spot}/>
              </div>
               <div className="bookingForm">
                 <BookingFormContainer spot={spot} />
              </div>
         </div>
            <BookingFormFooter spot={spot} openModal={this.props.openModal}/>
         </div>
      );
    } else{
      return <div>
        <header>
          <Link to="/" className="header-link"></Link>
          <GreetingContainerNonHomepage />
        </header>
        {/* <h1 className="badSpot"> Unfortunately this spot didn't make it through the journey to Westeros. <br></br>
            They left a message for you though: Winter is coming!</h1>
        <img className="logoName" src={window.logoName} /> */}
      </div>
    }
    }
}

export default withRouter(SpotShow)