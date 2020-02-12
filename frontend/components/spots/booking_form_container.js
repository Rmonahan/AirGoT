import { connect } from "react-redux";
import BookingForm from './booking_form';
import { withRouter} from "react-router-dom";
import {createBooking, receiveBookingErrors} from "../../actions/booking_actions";
import {closeModal} from "../../actions/modal_actions";

const msp = (state, OwnProps) => {
  const locationArray = OwnProps.location.pathname.split("/");
  const spotId = locationArray[locationArray.length - 1];
  return {
    spot: state.entities.spots[spotId],
    userId: state.session.id,
    errors: Object.values(state.errors.bookings)
  };
};

const mdp = (dispatch) => ({
  createBooking: (booking) => dispatch(createBooking(booking)),
  receiveBookingErrors: (errors) => dispatch(receiveBookingErrors(errors)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(msp, mdp)(BookingForm));