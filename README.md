<h1> AirGoT </h1>

AirGoT which is inspired by AirBnB was created to bring luxurious housing rentals to the game of thrones world. You can view available spots and book locations for the dates you want if they haven't already been booked. Get your spot soon cause they could fill up fast!


### <a href="https://airgot.herokuapp.com/"><p font-size='30px'>Live site</p></a>

<p align="center"><a href="https://airgot.herokuapp.com/"> <img src="https://airgot-dev.s3.amazonaws.com/images/logo.png"> </a></p>

<img src="https://airgot-dev.s3.amazonaws.com/screenSnaps/Screen+Shot+2019-12-20+at+10.38.57+AM.png">


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
  On the spots index page there is a map that can be toggled on or off. When the map is toggled on the spots that are shown are   based on the spots that are in view on the map. When the map is moved the spots list is filtered to be the spots that are     only visible on the map. This was done through Google Maps Api and marker mangement. Whenever the map is moved a thunk         action called updateBounds is dispatched. The action takes in the current bounds of the map and sends that to a fetchSpots     request. The fetchSpots request will then give those bounds to the backend controller and that controller will go through     the database and only return spots that are within those bounds. Those returned spots are then saved into the spots state     and that state is used to display the spots on the page.
  
 <img src="https://airgot-dev.s3.amazonaws.com/screenSnaps/Screen+Shot+2019-12-20+at+10.40.13+AM.png">

  
### User Authorization
  Users can sign up for an account. When signing up all validations are checked including custom validates for email format   and age over 18. If any of the validations failed then custom errors are given back to the user to make it clear what went   wrong. After creating an account users can login and logout. Logging in and logging out will alter the session token. When   a user logs in they are stored in the front ends session state. They will be kept in that state unless they logout so a     user being logged in can be tracked even on full page refreshes. Some routes are also blocked based on the user stored in   the session state.
  
  <img src="https://airgot-dev.s3.amazonaws.com/screenSnaps/Screen+Shot+2019-12-20+at+10.47.37+AM.png">
  
