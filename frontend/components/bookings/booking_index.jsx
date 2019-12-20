import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import BookingIndexItem from "./booking_index_item";
import GreetingContainerNonHomepage from "../greetings_container_non_homepage";

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.fetchUserBookings(this.props.userId);
  }

  render() {
    if (this.props.bookings.length > 0){
    const bookingLis = this.props.bookings.map((booking, i) => <BookingIndexItem key={i} booking={booking} />);
    return (
      <div>
      <header>
        <Link to="/" className="header-link"></Link>
        <GreetingContainerNonHomepage />
      </header>
      <div className="BookingIndex">
        <div className="listBookings">Your bookings:</div>
        <ul className="bookingIndexUl">
          {bookingLis}
        </ul>
      </div>
     </div>
    );
    }else {
      return (
        <div>
        <header>
          <Link to="/" className="header-link"></Link>
          <GreetingContainerNonHomepage />
        </header>
        <div className="noBookings">You currently have no bookings.</div>
        </div>
      );
    }

}
}


export default withRouter(BookingIndex);