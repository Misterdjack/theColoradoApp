function format ( d ) {
  console.log(d);
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Full name:</td>'+
            '<td>'+ d.name +'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extension number:</td>'+
            '<td>'+'test exension'+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
    '</table>';
}


    var map;

    // var mapDevices;

      map = new GMaps({
        div: '#map-canvas',
        lat: 40.74675,
        lng: -73.9841,
        zoom: 12,
        styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
      });
  

  var bounds = []

  var markerArray = [];

  var i;
    
  $(window).bind("scroll", function() {



  $.data(this, 'scrollTimer', setTimeout(function() {

  map.removeMarkers();



                  
    $('tr.transactionsList').each(function() {

      var info = $(this).attr('data-lat');

      var coordArray = info.split(',').map(function(info) {
        return Number(info);
      })

      if (info) {   
        markerArray.push({
          where   : coordArray,
          who     : $(this).attr('data-name'),
          amount  : $(this).attr('data-amount')
        });      
      };
        
    });

  for (i = 0; i < markerArray.length; i++) {  

var latlng = new google.maps.LatLng(markerArray[i].where[0], markerArray[i].where[1]);
bounds.push(latlng);


    map.addMarker({
      lat: markerArray[i].where[0],
      lng: markerArray[i].where[1],
      title: 'Lima',
      infoWindow: {
        content: '<div class="mapBaloon"><p class="mapText">' + markerArray[i].who + '<br>$'+markerArray[i].amount + '</p></div>'
      }
    });
  }


  if (bounds) {
    map.fitLatLngBounds(bounds);
  }












// google.maps.event.addDomListener(window, 'load', initialize);