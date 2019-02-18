

$('.spoiler').on('click', 'button', function(event) {
  console.log(event.target);
  //show the spoiler text
  //$('.spoiler span').show();
  //hide the spoiler button
  $(event.target).hide();
});


//Create the 'Reveal Spoiler Button
const $button = $('<button>Reveal Spoiler</button>');
//Append to Webpage
$('.spoiler').append($button);

//hide the spoiler text
$('.spoiler span').hide();
//when the button is pressed
