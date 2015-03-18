/////////////////
// CLIENT-SIDE //
/////////////////

// marker.position.toUrlValue()

// Form Submission
var onAdventureSubmit = function(e){

  e.preventDefault();
  
  // Make sure a marker is set on map
  if (marker) {
    var poslatlng =  marker.position.toUrlValue().split(',');

    console.log(poslatlng);

    var newAdventureData = {
      type: $('.adventure-type').val(),
      name: $('.adventure-name').val(),
      data: $('.adventure-date').val(),
      imageUrl: $('.adventure-imgUrl').val(),
      description: $('.adventure-description').val(),
      rating: $('.adventure-rating').val(),
      coords: {lat: poslatlng[0], lng: poslatlng[1]}
    };

    this.reset();

    // console.log(marker.position.toUrlValue());
    // Add validation here if necessary

    $.post('/update/addAdventure', newAdventureData, function(data){
      // console.log(data);
      // Clone the first adventure in the list, there must be at least one
      var newAdventureEl = $('.adventure').first().clone();
      newAdventureEl.find('strong').text(data.name);
      newAdventureEl.attr('data-id', data._id);

      $('#adventure-list').append(newAdventureEl);
      
      console.log(data)
    });
  }
  else {
    alert('Please select a location on the map');
  }
};

// Handle Delete
var adventureDelete = function(e){
  e.preventDefault();

  var adventureElement = $(this).closest('.adventure');
  var targetId = adventureElement.attr('data-id');

  $.post('/update/deleteAdventure', {targetId: targetId}, function(data){
    // When a success response is sent back
    adventureElement.remove();
  });
};

var adventureView = function(e){
  e.preventDefault();

  $('#view-modal').modal('show');

  var adventureElement = $(this).closest('.adventure');
  var targetId = adventureElement.attr('data-id');

  $.get('/update/getAdventure/' + targetId, function(data){
    $('#view-modal .adventure-type').text(data.type);
    $('#view-modal .adventure-name').text(data.name);
    $('#view-modal .adventure-date').text(data.date);
    $('#view-modal .adventure-imgUrl').html('<img src="' + data.imageUrl + '">');
    $('#view-modal .adventure-description').text(data.description);
    $('#view-modal .adventure-rating').text(data.rating);
  });
};


var adventureEdit = function(e){
  e.preventDefault();

  $('#edit-modal').modal('show');

  var adventureElement = $(this).closest('.adventure');
  var targetId = adventureElement.attr('data-id');

  $.get('/update/getAdventure/' + targetId, function(data){
    $('#edit-modal .adventure-type').text(data.type);
    $('#edit-modal .adventure-name').text(data.name);
    $('#edit-modal .adventure-date').text(data.date);
    $('#edit-modal .adventure-imgUrl').text(data.imageUrl);
    $('#edit-modal .adventure-description').text(data.description);
    $('#edit-modal .adventure-rating').text(data.rating);
    $('#edit-modal .adventure-id').val(data._id);
  });
};

var adventureEditSubmit = function(e){
  e.preventDefault();

  var dataFromClient = {
    type: $('#edit-modal .adventure-type').val(),
    name: $('#edit-modal .adventure-name').val(),
    date: $('#edit-modal .adventure-date').val(),
    imageUrl: $('#edit-modal .adventure-imgUrl').val(),
    description: $('#edit-modal .adventure-description').val(),
    rating: $('#edit-modal .adventure-rating').val()
  };

  var targetId = $('#edit-modal .adventure-id').val();

  $.post('/update/editAdventure/' + targetId, dataFromClient, function(data){
    console.log(data);

    // Hide the modal in the end
    $('#edit-modal').modal('hide');

    // Update the on-page DOM element
    $('[data-id="'+targetId+'"]')
      .find('strong')
      .text(data.name);
  });
};

// Initialize the event listeners
$(document).on('ready', function(){
  // Bootstrap Material Design
  $.material.init();
  //  Bootstrap Tooltip

  $('#new-adventure').on('submit', onAdventureSubmit);


  // Handle deletion clicks
  $(document).on('click', '.delete', adventureDelete);

  // Handle view clicks
  $(document).on('click', '.view', adventureView);

  // Handle edit clicks
  $(document).on('click', '.edit', adventureEdit);

  // Handle submitting the edit form
  $('#edit-form').on('submit', adventureEditSubmit);
});
