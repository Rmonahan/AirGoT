import { UPDATE_FILTER } from "../actions/filter_actions";




const filtersReducer = (state = {bounds:{}, minGuests: 1, maxGuests: 10}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, { [action.filter]: action.value });
    default:
      return state;
  }
};

export default filtersReducer;