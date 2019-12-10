import React from "react";
import GreetingContainer from "./greeting_container";
import {Route, Link} from "react-router-dom";
import Modal from "./modal";

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h1>AirGoT</h1>
      </Link> 
      <GreetingContainer />
    </header>


  </div>
);

export default App;