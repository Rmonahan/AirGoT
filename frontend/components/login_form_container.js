import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import {openModal, closeModal} from "../actions/modal_actions";

const msp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log in',
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Sign up
      </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);