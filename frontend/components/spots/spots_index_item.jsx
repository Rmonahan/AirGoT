import React from "react";
import { withRouter } from "react-router-dom";

class SpotsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/spots/${this.props.spot.id}`);
  }


  render() {
    const { spot } = this.props;
    return (
      <li className="spotIndexItem" onClick={this.handleClick}>
        <img src={spot.mainImageUrl} />
        <div className ="descriptionItems">
        <div className="indexHouseType"><span className="indexSuperhost">SUPERHOST</span>{spot.houseType}</div>
        <div className="indexTitle">{spot.title}</div>
        <div className="spotInfo">{spot.maxOccupants} guests - {spot.numberOfBedrooms} bedroom(s) - {spot.numberOfBeds} bed(s)- {spot.numberOfBathrooms} bath(s)</div>
        <div className="indexRating"><span className="skull"><i className="fas fa-skull"></i></span>{spot.dangerRating}</div>
        <div className="amenities">Wifi - Heating - Air conditioning</div>
        <div className="indexPrice"><span>${spot.price}</span> / night</div>
        </div>
      </li>
    );
  }
}


export default withRouter(SpotsIndexItem)