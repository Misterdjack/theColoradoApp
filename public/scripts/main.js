
// Google Maps
var initialize=function () {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      };


$(document).on('ready', function(){
	// Google maps initializer 
	$(document).on('load', initialize());


});

// google.maps.event.addDomListener(window, 'load', initialize);