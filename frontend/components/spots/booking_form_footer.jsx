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
        <button className="BookingFooterFormButton" onClick={ () => this.props.openModal("booking")}>Reserve</button>
      </div>
    );
  }
}

export default BookingFormFooter;