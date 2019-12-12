import { connect } from "react-redux";
import Greeting from './greeting';
import {openModal} from "../actions/modal_actions";
import {receiveSessionErrors, logout} from "../actions/session";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => { dispatch(openModal(modal)); dispatch(receiveSessionErrors([])); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);