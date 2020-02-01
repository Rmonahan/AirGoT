import { UPDATE_FILTER, REMOVE_FILTERS } from "../actions/filter_actions";




const filtersReducer = (state = {bounds:{}, guests: 0, allegiance: "All"}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, { [action.filter]: action.value });
    case REMOVE_FILTERS:
      return { bounds: {}, guests: 0, allegiance: "All"}
    default:
      return state;
  }
};

export default filtersReducer;