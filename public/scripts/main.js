// CLIENT-SIDE

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
    // var link = $('<img>').attr('src', data.imageUrl);
    // var listItem = $('<li>').text(data.name);
    // var postAdventure = listItem.append(link);

    // $('#adventure-list').append(postAdventure);

    // Clone the first adventure in the list, there must be at least one
    var newAdventureEl = $('.adventure').first().clone();
    newAdventureEl.find('strong').text(data.name);
    newAdventureEl.attr('data-id', data._id);

    $('#adventure-list').append(newAdventureEl);

  });
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
    $('#view-modal .adventure-name').text(data.name);
    $('#view-modal .adventure-latlng').text(data.latlng);
    $('#view-modal .adventure-type').text(data.type);
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
    $('#edit-modal .adventure-name').text(data.name);
    $('#edit-modal .adventure-latlng').text(data.latlng);
    $('#edit-modal .adventure-type').text(data.type);
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
    name: $('#edit-modal .adventure-name').val(),
    latlng: $('#edit-modal .adventure-latlng').val(),
    type: $('#edit-modal .adventure-type').val(),
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
