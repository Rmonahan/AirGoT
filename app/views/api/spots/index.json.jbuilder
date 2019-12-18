@spots.each do |spot|
 json.set! spot.id do 
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
  json.mainImageUrl spot.photos[0].image_url
  json.hostImageUrl spot.host.profile_photo_url
  json.hostName spot.host.first_name
  json.host spot.host
  json.photoUrls spot.photos.map {|photo| photo.image_url}
  json.amenities spot.amenities
 end

end