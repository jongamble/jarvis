(function(window, document, $) {
	
	$('.header-button-menu').on('click', function(e){
		$('.internal-menu').slideToggle();
		return false;
	});
	$('.switchButton').on('click', function(e){
		$(this).toggleClass('active');
		//e.preventDefault();
		return false;
	});

	$(window).on('resize', function(){
		$('.internal-menu').hide();
	})

}(this, this.document, this.jQuery));

// public/core.js
var appFunctions = angular.module('appFunctions', []);

function lightsController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/admin/listLights')
		.success(function(data) {
			$scope.users = data;
			//console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
};