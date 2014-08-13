// public/js/core.js
var appFunctions = angular.module('appFunctions', []);

function lightsController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	$http.get('/lights/listLights')
		.success(function(data) {
			$scope.lights = data;
			//console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	
	$scope.lightSwitchToggle = function($index){
		$http.post('/lights/lightSwitch/'+$index)
			.success(function(){
				return false;
			}).
			error(function(data){
				console.log('Error: ' + data);
			});
	};
};