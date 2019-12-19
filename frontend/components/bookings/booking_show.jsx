import React from "react";
import { withRouter } from "react-router-dom";

class BookingShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`users/${booking.userId}/bookings/`);
  }


  render() {
    const { booking } = this.props;
    const spot = booking.spot;

    return (
      <div>
        Your booking has been confirmed!
        <img src={sbooking.spot.mainImage} />
        <div className="descriptionItems">
          <div className="indexHouseType"><span className="indexSuperhost">SUPERHOST</span>{spot.house_type}</div>
          <div className="indexTitle">{spot.title}</div>
          <div className="indexRating"><span className="skull"><i className="fas fa-skull"></i></span>{spot.danger_rating}</div>
          <div className="indexPrice"><span>${spot.price}</span> / night</div>
      </div>
    );
  }
}


export default withRouter(BookingShow)