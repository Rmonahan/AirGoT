import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';



class SpotsMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.7829, lng: -73.9654 },
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.spots);

    this.map.addListener("idle", () => {
      const latlngbounds = this.map.getBounds();
      const northEast = {
        lat: latlngbounds.getNorthEast().lat(),
        lng: latlngbounds.getNorthEast().lng()
      };
      const southWest = {
        lat: latlngbounds.getSouthWest().lat(),
        lng: latlngbounds.getSouthWest().lng()
      };

      const bounds = {
        northEast, southWest
      };
      if (bounds.northEast.lat - bounds.southWest.lat !== 0){
         this.props.updateFilter("bounds", bounds);
      }
    });
  }
 

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }


  handleMarkerClick(spot) {
    this.props.history.push(`spots/${spot.id}`);
  }


  render() {
    return (
      <div id="map-container" ref={map => this.mapNode = map}>
        Map
      </div>
    );
  }
}

export default withRouter(SpotsMap);
