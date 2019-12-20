import { connect } from "react-redux";
import BookingIndex from './booking_index';
import { fetchBookings, fetchUserBookings } from "../../actions/booking_actions";


const msp = (state, OwnProps) => {
  return {
    bookings: Object.values(state.entities.bookings),
    userId: OwnProps.match.params.userId
  };
};

const mdp = (dispatch) => ({
  fetchBookings: () => dispatch(fetchBookings()),
  fetchUserBookings: (userId) => dispatch(fetchUserBookings(userId))
});

export default connect(msp, mdp)(BookingIndex);