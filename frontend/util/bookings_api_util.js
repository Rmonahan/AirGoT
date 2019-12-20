export const fetchBookings= () => (
  $.ajax({
    method: "GET",
    url: "/api/bookings",
  })
);

export const fetchUserBookings = (userId) => (
  $.ajax({
    method: "GET",
    url: "/api/bookings",
    data: {userId: userId}
  })
);

export const fetchBooking= (bookingId) => (
  $.ajax({
    method: "GET",
    url: `/api/bookings/${spotId}`
  })
);

export const createBooking = (booking) => (
  $.ajax({
    type: "POST",
    url: "/api/bookings",
    data: booking
  })
);

export const deleteBooking = (bookingId) => (
  $.ajax({
    type: "DELETE",
    url: `/api/bookings/${bookingId}`,
  })
);