import { connect } from "react-redux";
import SpotsIndex from './spots_index';
import { fetchSpots, fetchSpot } from "../../actions/spot_actions";
import {updateFilter, clearFilters} from "../../actions/filter_actions";


const msp = (state) => ({
  spots: Object.values(state.entities.spots),
  filters: state.ui.filters
});

const mdp = (dispatch) => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  clearFilters: () => dispatch(clearFilters())
});

export default connect(msp, mdp)(SpotsIndex);