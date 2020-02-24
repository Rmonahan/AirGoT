import { connect } from "react-redux";
import BookingShow from './booking_show';
import { fetchBookings, fetchBooking } from "../../actions/booking_actions";


const msp = (state, OwnProps) => {
  return {
    booking: state.entities.bookings[OwnProps.match.params.bookingId]
  };
};

const mdp = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchBooking: (bookingId) => dispatch(fetchBooking(bookingId)),
});

export default connect(msp, mdp)(BookingShow);