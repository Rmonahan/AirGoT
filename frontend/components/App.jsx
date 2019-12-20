import React from "react";
import {Route, Link} from "react-router-dom";
import Modal from "./modal";
import SpotIndexContainer from "./spots/spots_index_container";
import Homepage from "./homepage";
import SpotShowContainer from "./spots/spot_show_container";
import BookingShowContainer from "./bookings/booking_show_container";
import BookingIndexContainer from "./bookings/booking_index_container";
import CorrectUserRoute from "../util/correct_user_route_util";

const App = () => (
  <div className="splash">
    <Modal />
    <Route exact path="/" component={Homepage} />
    <Route exact path="/spots/:spotId" component={SpotShowContainer} />
    <Route exact path="/spots" component={SpotIndexContainer} />
    <CorrectUserRoute exact path="/users/:userId/bookings" component={BookingIndexContainer} />
    <Route exact path="/users/:userId/bookings/:bookingId" component={BookingShowContainer} />
  </div>
);

export default App;