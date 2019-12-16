import {fetchSpots} from "../util/spots_api_util";
import { receiveAllSpots } from "./spot_actions";

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  fetchSpots(getState().ui.filters).then((spots) => dispatch(receiveAllSpots(spots)));
};