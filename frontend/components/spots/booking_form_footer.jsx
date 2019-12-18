import React from "react";

class BookingFormFooter extends React.Component {
  constructor(props) {
    super(props);
    }



  render() {
      const {spot} = this.props;
    return (
      <div className="bookingFormFooter">
        <div className="bookingFormFooterPriceFull"><div className="bookingFormFooterPrice">${spot.price} </div> per night</div>
        <div className="bookingRating bookingFooterDanger"><span className="skull"><i className="fas fa-skull"></i></span>{this.props.spot.dangerRating}</div>
        <button className="BookingFooterFormButton">Reserve</button>
      </div>
    );
  }
}

export default BookingFormFooter;