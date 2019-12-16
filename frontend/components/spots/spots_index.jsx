import React from "react";
import SpotIndexItem from "./spots_index_item";
import SpotsMap from "./spots_map";
import GreetingContainerNonHomepage from "../greetings_container_non_homepage";
import { Route, Link } from "react-router-dom";

export default class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const spotLis = this.props.spots.map((spot, i) => <SpotIndexItem key={i} fetchSpot={this.props.fetchSpot} spot={spot} />);
    return (
      <div>
      <header>
        <Link to="/" className="header-link"></Link>
        <GreetingContainerNonHomepage />
      </header>
      <div className="spotIndex">
        <ul className="spotIndexUl">
          <span className="placesToStay">5+ places to stay</span>
          {spotLis}
        </ul>
        <div className="mapIndexComponent">
         <SpotsMap spots={this.props.spots} updateFilter={this.props.updateFilter}/>
        </div>
      </div>
      </div>
    );
  }
}