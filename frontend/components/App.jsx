import React from "react";
import GreetingContainer from "./greeting_container";
import {Route, Link} from "react-router-dom";
import Modal from "./modal";
import SpotIndexContainer from "./spots/spots_index_container";

const App = () => (
  <div className="splash">
    <Modal />
    <header>
      <Link to="/" className="header-link"></Link> 
      <GreetingContainer />
    </header>
    <SpotIndexContainer />
    <img id="background" src={window.backgroundImage} />
  </div>
);

export default App;