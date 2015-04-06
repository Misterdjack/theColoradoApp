////////////////////////////////
// gmaps options and settings //
////////////////////////////////

console.log('hello from gmapper')

    var map;

      map = new GMaps({
        div: '#map-gcanvas',
        lat: 40.74675,
        lng: -73.9841,
        zoom: 7,
        styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
      });
  

  var bounds = []

  var markerArray = [];

  var i;
    

  map.removeMarkers();


              
$('.adventure').each(function() {

  var info = $(this).attr('data-coords');

  var coordArray = info.split(',').map(function(info) {
    return Number(info);
  })

  if (info) {   
    markerArray.push({
      where   : coordArray,
      what     : $(this).attr('data-name'),
      linked  : $(this).attr('data-link')
    });      
  };
    
});

    // console.log(markerArray);

for (i = 0; i < markerArray.length; i++) {  

var latlng = new google.maps.LatLng(markerArray[i].where[0], markerArray[i].where[1]);
bounds.push(latlng);


    map.addMarker({
      lat: markerArray[i].where[0],
      lng: markerArray[i].where[1],
      infoWindow: {
        content: '<div class="mapBaloon"><a class="view" href="' + markerArray[i].linked + '"><p class="mapText">' + markerArray[i].what + '</p></div>'
      }
    });


    // console.log(bounds);
  }


  if (bounds) {
    map.fitLatLngBounds(bounds);
  }

map.zoom=7;
