json.set! @spot.id do 
  json.extract! @spot, :id, :price
  json.dangerRating @spot.danger_rating
end