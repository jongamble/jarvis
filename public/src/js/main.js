(function(window, document, $) {
	
	$('.switchButton').on('click', function(e){
		$(this).toggleClass('active');
		//e.preventDefault();
		return false;
	});

}(this, this.document, this.jQuery));