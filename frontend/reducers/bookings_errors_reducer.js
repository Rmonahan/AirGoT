import {RECEIVE_BOOKING_ERRORS, RECEIVE_BOOKING} from "../actions/booking_actions";
import { CLOSE_MODAL } from "../actions/modal_actions";
import { RECEIVE_ALL_SPOTS} from "../actions/spot_actions";

const bookingsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return [];
      }
    case RECEIVE_BOOKING:
      return [];
    case CLOSE_MODAL:
      return [];
    case RECEIVE_ALL_SPOTS:
      return [];
    default:
      return state;
  }
};

export default bookingsErrorsReducer;