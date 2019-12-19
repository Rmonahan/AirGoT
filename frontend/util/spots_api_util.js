export const fetchSpots = (data) => (
  $.ajax({
    method: "GET",
    url: "/api/spots",
    data
  })
);

export const fetchSpot = (spotId) => (
  $.ajax({
    method: "GET",
    url: `/api/spots/${spotId}`
  })
);

export const createSpot = (spot) => (
  $.ajax({
    type: "POST",
    url: "/api/spots",
    data: spot
  })
);