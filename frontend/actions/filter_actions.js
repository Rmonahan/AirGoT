import {fetchSpots} from "../util/spots_api_util";
import { receiveAllSpots } from "./spot_actions";

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const REMOVE_FILTERS = 'REMOVE_FILTERS';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const removeFilters = () => ({
  type: REMOVE_FILTERS,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  fetchSpots(getState().ui.filters).then((spots) => dispatch(receiveAllSpots(spots)));
};

export const clearFilters = () => dispatch => {
  dispatch(removeFilters());
}