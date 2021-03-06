import React from "react";
import SpotIndexItem from "./spots_index_item";
import SpotsMap from "./spots_map";
import GreetingContainerNonHomepage from "../greetings_container_non_homepage";
import SpotsIndexFilterNav from "./spots_index_filter_nav";
import { Route, Link } from "react-router-dom";
import SpotsIndexHomepageContainer from "./spots_index_homepage_container";

export default class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showMap: true};
    this.toggleShowMap = this.toggleShowMap.bind(this);
  } 


  toggleShowMap(){
      this.setState({showMap: !this.state.showMap});
  }

  // componentDidMount(){
  //   if (this.state.showMap === false){
  //     this.props.updateFilter("bounds", "none");
  //   }
  // }

  render() {
    const spotLis = this.props.spots.map((spot, i) => <SpotIndexItem key={i} fetchSpot={this.props.fetchSpot} spot={spot} />);
    const count = this.props.spots.length;
    if (this.state.showMap){
      return (
        <div>
        <header>
          <Link to="/" className="header-link"></Link>
          <GreetingContainerNonHomepage />
          <SpotsIndexFilterNav  toggleShowMap={this.toggleShowMap} clearFilters={this.props.clearFilters} updateFilter={this.props.updateFilter} filters={this.props.filters}/>
        </header>
        <div className="spotIndex">
          <ul className="spotIndexUl">
            <span className="placesToStay">{count} places to stay</span>
            {spotLis}
          </ul>
          <div className="mapIndexComponent">
          <SpotsMap spots={this.props.spots} updateFilter={this.props.updateFilter} showMap={this.state.showMap}/>
          </div>
        </div>
        </div>
        );
      }
    else {
      return(
        <div>
          <header>
            <Link to="/" className="header-link"></Link>
            <GreetingContainerNonHomepage />
            <SpotsIndexFilterNav toggleShowMap={this.toggleShowMap} clearFilters={this.props.clearFilters} updateFilter={this.props.updateFilter} filters={this.props.filters}/>
          </header>
          <SpotsIndexHomepageContainer />   
        </div>
      );
    }
  }
}