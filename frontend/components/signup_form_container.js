import { connect } from "react-redux";
import SessionForm from "./session_form";
import { openModal, closeModal } from "../actions/modal_actions";
import { receiveSessionErrors, signup } from "../actions/session";
import React from 'react';

const msp = (state, ownProps) => ({
  errors: Array.isArray(state.errors.session) ? state.errors.session : [],
  formType: 'Sign up',
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button className="link" onClick={() => { dispatch(openModal('login')); dispatch(receiveSessionErrors([])) }}>
      Log in
    </button>
  ),
  closeModal: () => { dispatch(closeModal()); dispatch(receiveSessionErrors([])); }
});

export default connect(msp, mdp)(SessionForm);