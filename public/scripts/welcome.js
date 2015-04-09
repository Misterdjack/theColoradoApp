/////////////////
// CLIENT-SIDE //
/////////////////

// Form Submission
var onAdventureSubmit = function(e){

  e.preventDefault();

  var newAdventureData = {
    name: $('.adventure-name').val(),
    latlng: $('.adventure-latlng').val(),
    type: $('.adventure-type').val(),
    data: $('.adventure-date').val(),
    imageUrl: $('.adventure-imgUrl').val(),
    description: $('.adventure-description').val(),
    rating: $('.adventure-rating').val()
  };

  this.reset();

  // Add validation here if necessary

  $.post('/update/addAdventure', newAdventureData, function(data){
    console.log('data:', data);
    // Append name and image to the bottom
    var link = $('<img>').attr('src', data.imageUrl);
    var listItem = $('<li>').text(data.name);
    var postAdventure = listItem.append(link);

    $('#adventure-list').append(postAdventure);

  });
};


var adventureView = function(e){
  e.preventDefault();

  $('#view-modal').modal('show');

  // var adventureElement = $(this).closest('.adventure');
  // var targetId = adventureElement.attr('data-id');
  // console.log($(this));
  $.get($(this).attr('href'), function(data){
    $('#view-modal .adventure-name').text(data.name);
    // $('#view-modal .adventure-latlng').text(data.latlng);
    $('#view-modal .adventure-type').text(data.type);
    $('#view-modal .adventure-date').text(data.date);
    $('#view-modal .adventure-imgUrl').html('<img src="' + data.imageUrl + '">');
    $('#view-modal .adventure-description').text(data.description);
    $('#view-modal .adventure-rating').text(data.rating);
  });
};

var adventureViewMap = function(e){
  e.preventDefault();

  $('#view-modal').modal('show');

  // var adventureElement = $(this).closest('.adventure');
  // var targetId = adventureElement.attr('data-id');
  console.log($(this));
  $.get($(this).attr('href'), function(data){
    $('#view-modal .adventure-name').text(data.name);
    // $('#view-modal .adventure-latlng').text(data.latlng);
    $('#view-modal .adventure-type').text(data.type);
    $('#view-modal .adventure-date').text(data.date);
    $('#view-modal .adventure-imgUrl').html('<img src="' + data.imageUrl + '">');
    $('#view-modal .adventure-description').text(data.description);
    $('#view-modal .adventure-rating').text(data.rating);
  });
};
// var mapView = function(e){
//   e.preventDefault();

//   $('#viewMap-modal').modal('show');

//   var adventureElement = $(this).closest('.adventure');
//   var targetId = adventureElement.attr('data-id');

//   $.get($(this).attr('href'), function(data){
    
//   });
// };


// Initialize the event listeners
$(document).on('ready', function(){

  // Bootstrap Material Design
  $.material.init();

  // $('#new-adventure').on('submit', onAdventureSubmit);

  // Handle view clicks
  $(document).on('click', '.view', adventureView);

  // $(document).on('click', '.adventure', adventureViewMap);
  // $(document).on('click', '.viewLocation', mapView);


});
