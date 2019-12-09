import { connect } from "react-redux";
import SessionForm from "./session_form";

const msp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log In',
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);