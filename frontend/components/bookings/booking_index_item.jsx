import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class BookingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { booking } = this.props;
      const spot = booking.spot;
      return (
        <div className="bookingIndexItem">
          <div className="bookingIndexShow">
            <img className="bookingIndexPhoto" src={booking.bookingPhotos[0].image_url} />
            <div className="descriptionItemsBooking">
              <div className="indexHouseType"><span className="indexSuperhost">SUPERHOST</span>{spot.allegiance}</div>
              <div className="indexTitle">{spot.title}</div>
              <div className="bookingRating"><span className="skull"><i className="fas fa-skull"></i></span>{spot.danger_rating}</div>
              <div className="bookingPrice"><span>${spot.price}</span> / night</div>
            </div>
          </div>
        </div>
      );
    }
 }


export default withRouter(BookingIndexItem);