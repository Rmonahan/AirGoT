import React from "react";

export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(spots) {
    const spotsObj = {};

    spots.forEach(spot => {spotsObj[spot.id] = spot;});

    spots.forEach(spot => {
      if (!this.markers[spot.id]){
        this.createMarkerFromSpot(spot, this.handleClick);
      }
    });

    Object.keys(this.markers).forEach(spotId => {
      if (!spotsObj[spotId]){
       this.removeMarker(this.markers[spotId]);
      }
    })

  }

  createMarkerFromSpot(spot){
    const position = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      spotId: spot.id
    });
    marker.addListener('click', () => this.handleClick(spot));
    this.markers[marker.spotId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.spotId].setMap(null);
    delete this.markers[marker.spotId];
  }
}

