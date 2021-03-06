import { connect } from "react-redux";
import SpotShow from './spot_show';
import { fetchSpots, fetchSpot } from "../../actions/spot_actions";
import {openModal} from "../../actions/modal_actions";
import {clearFilters} from "../../actions/filter_actions";


const msp = (state, OwnProps) => {
  return {
  spot: state.entities.spots[OwnProps.match.params.spotId],
  spots: Object.values(state.entities.spots)
};
};

const mdp = (dispatch) => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchSpot: (spotId) => dispatch(fetchSpot(spotId)),
  clearFilters: () => dispatch(clearFilters()),
  openModal: modal => { dispatch(openModal(modal)); }
});

export default connect(msp, mdp)(SpotShow);