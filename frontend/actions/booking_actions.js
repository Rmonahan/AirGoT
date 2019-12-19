import * as APIUtil from "../util/bookings_api_util";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";


export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveAllBookings = (bookings) => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

export const fetchBookings = () => dispatch => {
  return APIUtil.fetchBookings().then((bookings) => dispatch(receiveAllBookings(bookings)));
};

export const fetchBooking = (bookingId) => dispatch => {
  return APIUtil.fetchBooking(bookingId).then((booking) => dispatch(receiveBooking(booking)));
};

export const createBooking = (booking) => dispatch => {
  return APIUtil.createBooking(booking).then((booking) => dispatch(receiveBooking(booking)));
};

export const deleteBooking = (bookingId) => dispatch => {
  return APIUtil.deleteBooking(bookingId).then((booking) => dispatch(receiveBooking(booking)));
};
