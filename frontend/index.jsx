import React from "react";
import ReactDom from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import {login, logout, signup} from "./actions/session";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
 
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDom.render(<Root store={store} />, root);
});