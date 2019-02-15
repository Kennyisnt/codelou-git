//
//
// $('#flashMessage').hide().slideDown(1000).delay(3000).slideUp();
//
// const title = "My First Blog Post";
// const content = "This is my <strong>first</strong> post! jQuery is so much easier to use than just the RAW javaScript.";
//
// $('#blogTitlePreview').text(title);
// $('#blogContentPreview').html(content);
$('#flashMessage').hide();
$('#previewButton').click(function() {
  const title = $('#blogTitleInput').val();
  console.log(title);
  const content = $('#blogContentInput').val();
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);
  $('#flashMessage').slideDown(500).delay(3000).slideUp();
});
