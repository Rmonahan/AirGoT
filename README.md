<h1> AirGoT </h1>

AirGoT which is inspired by AirBnB was created to bring luxurious housing rentals to the game of thrones world. You can view available spots and book locations for the dates you want if they haven't already been booked. Get your spot soon cause they could fill up fast!


### <a href="https://airgot.herokuapp.com/"><p font-size='30px'>Live site</p></a>

<img src="https://airgot-dev.s3.amazonaws.com/screenSnaps/Screen+Shot+2020-02-03+at+4.59.41+PM.png">


## Technologies Used:
  * Google Maps API
  * React/Redux
  * Ruby on Rails
  * Javascript
  * PostgresSQL



## Features
  * User Authorization
  * Available Spots can be viewed
  * Spots can be filtered using Google Maps
  * Spots can be booked if available
  * User can view current bookings
  
  
### Spots can be filtered using Google Maps
  On the spots index page there is a map that can be toggled on or off. When the map is toggled on the spots that are shown are  based on the spots that are in view on the map. When the map is moved the spots list is filtered to be the spots that are  only visible on the map. This was done through Google Maps Api and marker mangement. Whenever the map is moved a thunk  action called updateFilter is dispatched. The action takes in the new bounds of the map and sends that to a fetchSpots     request. The fetchSpots request will then give those bounds to the backend controller and that controller will go through    the database and only return spots that are within those bounds. Those returned spots are then saved into the spots state    and that state is used to display the spots on the page.
  
 <img src="https://airgot-dev.s3.amazonaws.com/screenSnaps/Screen+Shot+2019-12-20+at+10.40.13+AM.png">

  
### User Authorization
  Users can sign up for an account. When signing up all validations are checked including custom validates for email format   and age over 18. If any of the validations failed then custom errors are given back to the user to make it clear what went   wrong. After creating an account users can login and logout. Logging in and logging out will alter the session token. When   a user logs in they are stored in the front ends session state. They will be kept in that state unless they logout so a     user being logged in can be tracked even on full page refreshes. Some routes are also blocked based on the user stored in   the session state.
  
  <img src="https://airgot-dev.s3.amazonaws.com/screenSnaps/Screen+Shot+2019-12-20+at+10.47.37+AM.png">
  
## Code Snipets


1. Initialization of the google map and the event listener to update the bounds filter when map is moved.

```Ruby
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

      this.props.updateFilter("bounds", bounds);
    });
  }
```

2. Function to give to calander in order to disable the dates that have already been booked. Also the handleSubmit code for when a booking is made.


```Ruby
handleSubmit(e) {
    e.preventDefault();
    this.props.createBooking({ 
      booking: 
      { user_id: this.props.userId, 
        spot_id: this.props.spot.id, 
        start_date: this.state.startDate.format('YYYY-MM-DD'), 
        end_date: this.state.endDate.format('YYYY-MM-DD')
      }
    })
      .then((booking) => { this.props.history.push(`/users/${booking.booking.userId}/bookings/${booking.booking.id}`); })
      .then(this.props.closeModal);
  }

  isOutsideRange(day){
    if (moment().diff(day) > 0) {
      return true;
    }

    let disabled = false;

    const disabledDates = [];
       this.props.spot.bookings.forEach((booking) => {
          let currentDate = moment(booking.start_date);
          let endDate = moment(booking.end_date);

          while (currentDate <= endDate){
            disabledDates.push(moment(currentDate.format('YYYY-MM-DD')));
            currentDate = moment(currentDate).add(1,'days');
          }
      });

      disabledDates.forEach((date) => {
        if (date.isSame(day, 'date')){
          disabled = true;
        }
      });
      return disabled;
  }
```
 
<p align="center"><a href="https://airgot.herokuapp.com/"> <img src="https://airgot-dev.s3.amazonaws.com/images/logo.png"> </a></p>
