import React from "react";
import SpotIndexItem from "./spot_index_item";

export default class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchSpots();
  }



  render() {

    const spotLis = this.props.spots.map((spot, i) => <SpotIndexItem key={i} fetchSpot = {this.props.fetchSpot} spot={spot}/>)
    return ( 
      <div className="spotIndex">
         <ul> {spotLis} </ul>
      </div>
    );
  }
}