import React from "react";
import GreetingContainer from "./greeting_container";
<<<<<<< HEAD
import {Route} from "react-router-dom";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import {AuthRoute} from "../util/route_util";
=======
import {Route, Link} from "react-router-dom";
import Modal from "./modal";
>>>>>>> UserAuth

const App = () => (
  <div className="splash">
    <Modal />
    <header>
      <Link to="/" className="header-link">
      </Link> 
      <GreetingContainer />
    </header>
<<<<<<< HEAD

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
=======
    <img id="background" src={window.backgroundImage} />
>>>>>>> UserAuth

  </div>
);

export default App;