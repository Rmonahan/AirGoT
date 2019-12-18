import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';



class SpotShowMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.spot.lat, lng: this.props.spot.lng },
      zoom: 15
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.createMarker(this.props.spot);
  }

  createMarker(spot){
  const position = new google.maps.LatLng(spot.lat, spot.lng);
    var house = {
      path: 'M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z',
      fillColor: 'white',
      fillOpacity: 1,
      scale: 2,
      strokeColor: 'black',
      strokeWeight: 2,
      anchor: new google.maps.Point(10, 10)
    };
  let marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id,
      icon: house
    });

    // let circle1 = new google.maps.Circle({
    //   map: this.map,
    //   radius: 16093,    // 10 miles in metres
    //   fillColor: '#AA0000'
    // });
    
    // circle1.bindTo('center', marker, 'position');

    let circle2 = new google.maps.Circle({
      map: this.map,
      radius: 500,    // 10 miles in metres
      fillColor: '#999999',
      strokeColor: '#999999'
    });
    
    circle2.bindTo('center', marker, 'position');
  }

  render() {
    return (
      <div id="map-container" ref={map => this.mapNode = map}>
        Map
      </div>
    );
  }
}

export default withRouter(SpotShowMap);
