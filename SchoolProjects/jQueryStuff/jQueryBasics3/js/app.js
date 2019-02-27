const $odd = $('a:odd');
const $secureLinks = $('a[href ^= "https://"]');
const $unSecureLinks = $('a[href ^= "http://"]');
const $pdfs = $('a[href $=".pdf"]');
// $pdfs.hide();
const $pdfCheckbox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);
$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$('#links').append($pdfCheckbox);

$pdfs.on('click', function(event) {
  //check if checkbox has been checked
  if ($(':checked').length === 0) {
    //if zero checkboxes are chekded
    event.preventDefault();
    //prevent download of Documentation
    alert('Please check the box to allow PDF downloads.');
    //alert the $unSecureLinks
  };
});
