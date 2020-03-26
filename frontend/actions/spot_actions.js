import * as APIUtil from "../util/spots_api_util";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";


export const receiveSpot = (spot) => ({
      type: RECEIVE_SPOT,
      spot
});

export const receiveAllSpots = (spots) => ({
  type: RECEIVE_ALL_SPOTS,
  spots
});

export const fetchSpots = () => (dispatch, getState) => {
  APIUtil.fetchSpots(getState().ui.filters).then((spots) => dispatch(receiveAllSpots(spots)));
};

export const fetchSpot = (spotId) => dispatch => {
  APIUtil.fetchSpot(spotId).then((spot) => dispatch(receiveSpot(spot)));
};

export const createSpot = (spot) => dispatch => {
  APIUtil.createSpot(spot).then((spot) => dispatch(receiveSpot(spot)));
};
