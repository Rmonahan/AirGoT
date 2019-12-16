json.array! @spots do |spot|
  json.extract! spot, :id, :lat, :lng, :address, :city, :state, :zipcode, :title, :description,
                      :allegiance, :danger_rating, :house_type, :max_occupants, :price, :number_of_bedrooms,
                      :number_of_beds, :number_of_bathrooms, :square_foot
  json.dangerRating spot.danger_rating
  json.houseType spot.house_type
  json.maxOccupants spot.max_occupants
  json.numberOfBedrooms spot.number_of_bedrooms
  json.numberOfBeds spot.number_of_beds
  json.numberOfBathrooms spot.number_of_bathrooms
  json.squareFoot spot.square_foot
  json.mainImageUrl url_for(spot.photos[0])
  json.hostImageUrl url_for(spot.host.profile_photo)
  json.hostName spot.host.first_name
  json.photoUrls spot.photos.map {|photo| url_for(photo)}

end