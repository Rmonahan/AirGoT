import { connect } from "react-redux";
import SessionForm from "./session_form";

const msp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);