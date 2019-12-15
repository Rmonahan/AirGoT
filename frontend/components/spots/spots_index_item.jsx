import React from "react";

export default class SpotsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { spot } = this.props;
    return (
      <li className="spotIndexItem">
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