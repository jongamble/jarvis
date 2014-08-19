// public/js/core.js
var appFunctions = angular.module('appFunctions', []);

function lightsController($scope, $http, socket) {
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

		var request = $http({
            method: "post",
            url: "/lights/lightSwitch/" + $index,
            data: {}
        });

		request.success(function(){
			console.log('Light Switched: '+$index);
			return false;
		}).
		error(function(data){
			console.log('Error: ' + data);
			return false;
		});
	};
};