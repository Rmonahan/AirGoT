import React from "react";
import SpotIndexItemHomepage from "./spots_index_item_homepage";

export default class SpotsIndexHomepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.updateFilter("bounds", "none");
  }



  render() {
    const spotLis = this.props.spots.map((spot, i) => <SpotIndexItemHomepage key={i} fetchSpot = {this.props.fetchSpot} spot={spot}/>)
    let count = spotLis.length
    let title = "Where to stay"
    if (this.props.location.pathname === "/spots"){
      title = `${count} places to stay`
    }
    return ( 
      <div className="spotIndexHomepage">
         <ul> 
           <span className="whereToStay">{title}</span>
           {spotLis} 
         </ul>
        </div>
    );
  }
}