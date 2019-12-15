import React from "react";

export default class SpotsIndexItemHomepage extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {spot} = this.props;
    return (
      <li className="spotIndexItemHomepage">
        <img src={spot.mainImageUrl} />
        <div className="city"><span className="superhost">SUPERHOST</span>{spot.city}</div>
        <div className="title">{spot.title}</div>
        <div className="price"><span>${spot.price}</span> / night</div>
        <div className="rating"><span className="skull"><i className="fas fa-skull"></i></span>{spot.dangerRating}</div>
      </li>
    );
  }
}