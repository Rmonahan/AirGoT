import { connect } from "react-redux";
import GreetingNonHomePage from './greeting_non_hompage';
import { openModal } from "../actions/modal_actions";
import { receiveSessionErrors, logout } from "../actions/session";
import {updateFilter} from "../actions/filter_actions";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: modal => { dispatch(openModal(modal)); dispatch(receiveSessionErrors([])); },
  updateFilter: (filter, value) => { dispatch(updateFilter(filter, value))}
});

export default connect(mapStateToProps, mapDispatchToProps)(GreetingNonHomePage);