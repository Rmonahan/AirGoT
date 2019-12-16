import { connect } from "react-redux";
import SpotsIndex from './spots_index';
import { fetchSpots, fetchSpot } from "../../actions/spot_actions";
import {updateFilter} from "../../actions/filter_actions";


const msp = (state) => ({
  spots: Object.values(state.entities.spots)
});

const mdp = (dispatch) => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(msp, mdp)(SpotsIndex);