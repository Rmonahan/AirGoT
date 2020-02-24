json.extract! @booking, :id
json.spotId @booking.spot_id
json.user @booking.user
json.spot @booking.spot
json.userId @booking.user_id
json.bookingPhotos @booking.spot.photos
json.startDate @booking.start_date
json.endDate @booking.end_date
