//hide the spoiler text
$('.spoiler span').hide();
//when the button is pressed
$('.spoiler button').click(function() {
  //show the spoiler text
  $('.spoiler span').show();
  //hide the spoiler button
  $('.spoiler button').hide();
});
