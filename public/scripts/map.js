/////////////////////////////////
// Client Side Google Maps API //
/////////////////////////////////

// Global Variables
var map;
var marker;
var poslatlng;

/////////////////////////
// Create map for load //
/////////////////////////
var initialize= function() {

  // console.log(adventures.coords);
  
  var mapOptions = {
    zoom: 15,
    // additional options here
  };

  // Instantiate a new map
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }

  //Click event to place marker 
  google.maps.event.addListener(map, 'click', function(event) {
     placeMarker(event.latLng);
  });

  // var openModal = function () {
    
  //   if (marker.getAnimation() !== null) {
  //       marker.setAnimation(null);
  //     } else {
  //       marker.setAnimation(google.maps.Animation.BOUNCE);
  //     }
    
  // };

  // // Click event to open modal
  // google.maps.event.addListener(marker, 'click', openModal);
};

/////////////////////////////////////////////////////////
// Error handle if browser doesn't support Geolocation //
/////////////////////////////////////////////////////////
var handleNoGeolocation=function(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser does not support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
};

////////////////
// Add Marker //
////////////////
var placeMarker = function(pos) {
  marker = new google.maps.Marker({
      position: pos, 
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP
  });

  poslatlng= pos;
  // map.setCenter(pos);
  marker.setMap(map);


  // $.get({
     // Ajax call to be put in later persist to database e.g. may need a toJson method in google documentation
  // });
};



//////////////////////////////
// Vanilla JS DOM rendering //
//////////////////////////////
google.maps.event.addDomListener(window, 'load', initialize);














