@bookings.each do |booking|
  json.set! booking.id do 
    json.extract! booking, :id
    json.spotId booking.spot_id
    json.userId booking.user_id
    json.user booking.user
    json.spot booking.spot
    json.bookingPhotos booking.spot.photos
    json.startDate booking.start_date
    json.endDate booking.end_date
  end
end