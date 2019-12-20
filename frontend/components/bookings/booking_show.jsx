import React from "react";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom";
import GreetingContainerNonHomepage from "../greetings_container_non_homepage";

class BookingShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.props.fetchBookings();
  }

  handleClick() {
    this.props.history.push(`users/${this.props.booking.userId}/bookings/`);
  }


  render() {
    const { booking } = this.props;
    if (booking){
      const spot = booking.spot;
    return (
      <div>
      <header>
        <Link to="/" className="header-link"></Link>
        <GreetingContainerNonHomepage />
      </header>
      <div className="bookingShow">
        <h1 className="bookingConfirm">Your booking has been confirmed!</h1>
        <img className="bookingPhoto" src={booking.bookingPhotos[0].image_url} />
        <div className="descriptionItemsBooking">
          <div className="indexHouseType"><span className="indexSuperhost">SUPERHOST</span>{spot.allegiance}</div>
          <div className="indexTitle">{spot.title}</div>
          <div className="bookingRating"><span className="skull"><i className="fas fa-skull"></i></span>{spot.danger_rating}</div>
          <div className="bookingPrice"><span>${spot.price}</span> / night</div>
        </div>
      </div>
      </div>
    );
    }else {
      return (<div></div>);
    }
  }
}


export default withRouter(BookingShow);