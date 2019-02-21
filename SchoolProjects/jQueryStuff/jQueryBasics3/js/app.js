const $odd = $('a:odd');
const $secureLinks = $('a[href ^= "https://"]');
const $unSecureLinks = $('a[href ^= "http://"]');
const $pdfs = $('a[href $=".pdf"]');
$pdfs.hide();
