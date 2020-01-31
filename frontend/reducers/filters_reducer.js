import { UPDATE_FILTER, REMOVE_FILTERS } from "../actions/filter_actions";




const filtersReducer = (state = {bounds:{}}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, { [action.filter]: action.value });
    case REMOVE_FILTERS:
      return { bounds: {}}
    default:
      return state;
  }
};

export default filtersReducer;