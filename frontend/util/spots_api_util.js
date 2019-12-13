export const fetchSpots = () => (
  $.ajax({
    method: "GET",
    url: "/api/spots"
  })
);

export const fetchSpot = (spotId) => (
  $.ajax({
    method: "GET",
    url: `/api/spot/${spotId}`
  })
);

export const createSpot = (spot) => (
  $.ajax({
    type: "POST",
    url: "/api/spots",
    data: spot
  })
);