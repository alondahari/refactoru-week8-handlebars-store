$(document).on('ready', function() {
  var templateScript = $('#product-template').html()
  var template = Handlebars.compile(templateScript)
  productsData.productsList.forEach(function(val){
  	$('#product-container').append(template(val))
  })
});