import React from "react";
import { withRouter } from "react-router-dom";

class SpotsIndexItemHomepage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push(`/spots/${this.props.spot.id}`);
  }


  render() {
    const {spot} = this.props;
    return (
      <li onClick={this.handleClick} className="spotIndexItemHomepage">
        <img src={spot.mainImageUrl} />
        <div className="city"><span className="superhost">SUPERHOST</span>{spot.city}</div>
        <div className="title">{spot.title}</div>
        <div className="price"><span>${spot.price}</span> / night</div>
        <div className="rating"><span className="skull"><i className="fas fa-skull"></i></span>{spot.dangerRating}</div>
      </li>
    );
  }
}

export default withRouter(SpotsIndexItemHomepage);