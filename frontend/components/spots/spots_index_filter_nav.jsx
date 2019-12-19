import React from "react";
import { Link } from "react-router-dom";

export default class SpotsIndexFilterNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mapToggle: true};
    this.toggleMap = this.toggleMap.bind(this);
  }
 
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (this.state.mapToggle && window.innerWidth <= 1000){
      this.toggleMap();
    }

    if (!this.state.mapToggle && window.innerWidth > 1000){
      this.toggleMap();
    }
  }


  toggleMap(){
    this.setState({mapToggle: !this.state.mapToggle});
    this.props.toggleShowMap();
  }

  render() {
      let icon = <i className="fas fa-toggle-off"></i>
      if (this.state.mapToggle){
        icon = <i className="fas fa-toggle-on"></i>
      }
      return (
        <nav className="filterNav">
          <button>Guests</button>
          <button>Allegiance</button>
          <div className="showMapButton">Show Map
          <div className="toggleMap" onClick={this.toggleMap}>{icon}</div>
          </div>
        </nav>
      )
  }
}