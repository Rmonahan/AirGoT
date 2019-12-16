import React from "react";
import SpotIndexItem from "./spots_index_item";
import SpotsMap from "./spots_map";

export default class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchSpots();
  // }



  render() {
    const spotLis = this.props.spots.map((spot, i) => <SpotIndexItem key={i} fetchSpot={this.props.fetchSpot} spot={spot} />);
    return (
      <div className="spotIndex">
        <div id="backgroundnonhomepage"/>
        <ul className="spotIndexUl">
          <span className="placesToStay">5+ places to stay</span>
          {spotLis}
        </ul>
        <SpotsMap spots={this.props.spots} updateFilter={this.props.updateFilter}/>
      </div>
    );
  }
}