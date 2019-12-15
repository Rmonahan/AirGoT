import { connect } from "react-redux";
import SpotsIndexHomepage from './spots_index_homepage';
import { fetchSpots, fetchSpot } from "../../actions/spot_actions";


const msp = (state) => ({
  spots: Object.values(state.entities.spots)
});

const mdp = (dispatch) => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchSpot: (spotId) => dispatch(fetchSpot(spotId))
});

export default connect(msp, mdp)(SpotsIndexHomepage);