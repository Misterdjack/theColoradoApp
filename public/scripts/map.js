/////////////////////
// Google Maps Api //
/////////////////////
var map;
var marker;

/////////////////////////
// Create map for load //
/////////////////////////
var initialize= function() {
  
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
};

/////////////////////////////////////////////////////////
// Error handle if browser doesn't support Geolocation //
/////////////////////////////////////////////////////////
var handleNoGeolocation=function(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
};

//////////////////////////////
// Vanilla JS DOM rendering //
//////////////////////////////
// google.maps.event.addDomListener(window, 'load', initialize);


//////////////////////////
// jQuery DOM rendering //
//////////////////////////
$(document).on('ready', function(){
  // Google maps initializer 
  $(document).on('load', initialize());


});









