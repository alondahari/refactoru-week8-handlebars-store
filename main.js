$(document).on('ready', function() {
  var templateScript = $('#product-template').html()
  var template = Handlebars.compile(templateScript)
  productsData.productsList.forEach(function(val){
  	$('#product-container').append(template(val))
  })

  var wishlistScript = $('#wishlist-template').html()
  var wishlistTemplate = Handlebars.compile(wishlistScript)

  $('#wishlist-add').on('click', function(){
  	var wishlistItem = $('#wishlist-input').val()
  	if (wishlistItem) {
  		$('#product-container').append(wishlistTemplate({title: wishlistItem}))

  	}
  })

  $(document).on('click', '.wishlist-remove', function(){
  	$(this).prev().andSelf().remove()
  })
});