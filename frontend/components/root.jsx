import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import App from './App';


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </Provider>
  )
};

export default Root;