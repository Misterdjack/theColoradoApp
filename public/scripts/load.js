
var mapView = function(e){
  e.preventDefault();

  $('#viewMap-modal').modal('show');

  var adventureElement = $(this).closest('.adventure');
  var targetId = adventureElement.attr('data-id');

  $.get($(this).attr('href'), function(data){
    
  });
};


// Initialize the event listeners
$(document).on('ready', function(){

  // Bootstrap Material Design
  $.material.init();

  // $('#new-adventure').on('submit', onAdventureSubmit);

  // Handle view clicks
  $(document).on('click', '.view', adventureView);

  // $(document).on('click', '.viewLocation', mapView);


});