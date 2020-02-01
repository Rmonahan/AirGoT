import React from "react";
import { Link } from "react-router-dom";
import AllegianceDropdown from "./allegianceDropdown";
import GuestsFilter from "../guests_filter";

export default class SpotsIndexFilterNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mapToggle: true, guests: 0};
    this.toggleMap = this.toggleMap.bind(this);
    this.clear = this.clear.bind(this);
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

  clear(){
    this.props.clearFilters();
    this.props.updateFilter("guests", 0);
  }

  render() {
      let mapIcon = <i className="fas fa-toggle-off"></i>
      if (this.state.mapToggle){
        mapIcon = <i className="fas fa-toggle-on"></i>
      }

      return (
        <nav className="filterNav">
          <GuestsFilter guests={this.props.filters.guests} updateFilter={this.props.updateFilter}/>
          <AllegianceDropdown allegiance={this.props.filters.allegiance} updateFilter={this.props.updateFilter} />
          <button onClick={this.clear}>Clear All Filters</button>
          <div className="showMapButton">Show Map
          <div className="toggleMap" onClick={this.toggleMap}>{mapIcon}</div>
          </div>
        </nav>
      )
  }
}