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

    const guestPlural = spot.maxOccupants > 1 ? "guests" : "guest";
    const bedroomPlural = spot.numberOfBedrooms > 1 ? "bedrooms" : "bedroom";
    const bedPlural = spot.numberOfBeds > 1 ? "beds" : "bed";
    const bathPlural = spot.numberOfBathrooms > 1 ? "baths" : "bath";
    debugger
    return (
      <li className="spotIndexItem" onClick={this.handleClick}>
        <img src={spot.mainImageUrl} />
        <div className ="descriptionItems">
          <div className="indexHouseType"><span className="indexSuperhost">SUPERHOST</span>{spot.allegiance}</div>
          <div className="indexTitle">{spot.title}</div>
          <div className="spotInfo">{spot.maxOccupants}{" "}{guestPlural} - {spot.numberOfBedrooms}{" "}{bedroomPlural} - {spot.numberOfBeds}{" "}{bedPlural} - {spot.numberOfBathrooms}{" "}{bathPlural}</div>
          <div className="indexRating"><span className="skull"><i className="fas fa-skull"></i></span>{spot.dangerRating}</div>
          <div className="amenitiesIndex">
            {spot.amenities[1].name} - {" "} {spot.amenities[0].name} - {" "} {spot.amenities[2].name}
          </div>
          <div className="indexPrice"><span>${spot.price}</span> / night</div>
        </div>
      </li>
    );
  }
}


export default withRouter(SpotsIndexItem)