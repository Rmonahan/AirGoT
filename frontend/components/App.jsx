import React from "react";
import {Route, Link} from "react-router-dom";
import Modal from "./modal";
import SpotIndexContainer from "./spots/spots_index_container";
import Homepage from "./homepage";
import SpotShowContainer from "./spots/spot_show_container";

const App = () => (
  <div className="splash">
    <Modal />
    <Route exact path="/" component={Homepage} />
    <Route exact path="/spots/:spotId" component={SpotShowContainer} />
    <Route exact path="/spots" component={SpotIndexContainer} />
  </div>
);

export default App;