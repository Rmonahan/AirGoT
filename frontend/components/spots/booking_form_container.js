import { connect } from "react-redux";
import BookingForm from './booking_form';
import { withRouter} from "react-router-dom";

const msp = (state, OwnProps) => {
  const locationArray = OwnProps.location.pathname.split("/");
  const spotId = locationArray[locationArray.length - 1];
  return {
    spot: state.entities.spots[spotId],
  };
};

const mdp = (dispatch) => ({
});

export default withRouter(connect(msp, mdp)(BookingForm));