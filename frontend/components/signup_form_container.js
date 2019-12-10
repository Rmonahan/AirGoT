import { connect } from "react-redux";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../actions/modal_actions";
import React from 'react';

const msp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign up',
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Log in
      </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);