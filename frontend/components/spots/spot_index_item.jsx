import React from "react";

export default class SpotsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {spot} = this.props;
    debugger;
    return (
      <li>
        {spot.title}
        {spot.city}
        {spot.price}
        {spot.dangerRating}
      </li>
    );
  }
}