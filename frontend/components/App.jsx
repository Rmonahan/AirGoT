import React from "react";
import GreetingContainer from "./greeting_container";
import {Route, Link} from "react-router-dom";
import Modal from "./modal";
import SpotIndexHomepageContainer from "./spots/spots_index_homepage_container";
import SearchForm from "./search_form";
import SpotIndexContainer from "./spots/spots_index_container";
import Homepage from "./homepage";

const App = () => (
  <div className="splash">
    <Modal />
    <header>
      <Link to="/" className="header-link"></Link> 
      <GreetingContainer />
    </header>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/spots" component={SpotIndexContainer} />
  </div>
);

export default App;