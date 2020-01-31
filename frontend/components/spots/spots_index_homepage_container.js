import { connect } from "react-redux";
import SpotsIndexHomepage from './spots_index_homepage';
import { fetchSpots, fetchSpot } from "../../actions/spot_actions";
import { updateFilter} from "../../actions/filter_actions";
import {withRouter} from "react-router-dom";


const msp = (state) => ({
  spots: Object.values(state.entities.spots)
});

const mdp = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchSpot: (spotId) => dispatch(fetchSpot(spotId))
});

export default withRouter(connect(msp, mdp)(SpotsIndexHomepage));