import React from "react";
import GreetingContainer from "./greeting_container";
import {Route, Link} from "react-router-dom";
import Modal from "./modal";
import SpotIndexHomepageContainer from "./spots/spots_index_homepage_container";

const App = () => (
  <div className="splash">
    <Modal />
    <header>
      <Link to="/" className="header-link"></Link> 
      <GreetingContainer />
    </header>
    <img id="background" src={window.backgroundImage} />
    <SpotIndexHomepageContainer />
  </div>
);

export default App;