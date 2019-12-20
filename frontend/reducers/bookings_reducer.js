import { RECEIVE_ALL_BOOKINGS, RECEIVE_BOOKING } from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return Object.assign({}, state, { booking: action.booking});
    default:
      return state;
  }
};

export default bookingsReducer;