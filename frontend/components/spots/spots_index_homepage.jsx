import React from "react";
import SpotIndexItemHomepage from "./spots_index_item_homepage";

export default class SpotsIndexHomepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchSpots();
  }



  render() {

    const spotLis = this.props.spots.map((spot, i) => <SpotIndexItemHomepage key={i} fetchSpot = {this.props.fetchSpot} spot={spot}/>)
    return ( 
      <div className="spotIndexHomepage">
           <span className="whereToStay">Where to stay</span>
         <ul> 
           {spotLis} 
         </ul>
      </div>
    );
  }
}