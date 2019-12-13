json.extract! @spot, :id, :lat, :lng, :address, :city, :state, :zipcode, :title, :description,
 :allegiance, :danger_rating, :house_type, :max_occupants, :price, :number_of_bedrooms,
 :number_of_beds, :number_of_bathrooms, :square_foot

# spot.photos.each do |photo, i|
#   json.image_url{i} url_for(photo)
# end