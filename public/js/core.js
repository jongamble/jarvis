// public/js/core.js
var appFunctions = angular.module('appFunctions', []);

function lightsController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	function listLights(){
		$http.get('/lights/listLights')
			.success(function(data) {
				$scope.lights = data;
				//console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}
	listLights();

	
	$scope.lightSwitchToggle = function($index){

		var request = $http({
            method: "post",
            url: "/lights/lightSwitch/" + $index,
            data: {}
        });

		request.success(function(){
			console.log('Light Switched: '+$index);

			listLights();
			return false;
		}).
		error(function(data){
			console.log('Error: ' + data);
			return false;
		});
	};
};


function lightForm($scope, $http) {
	$scope.formData = {};

	$scope.lightFormPost = function($index){
		var request = $http({
			method: "post",
			url: "/settings/createLight",
			data: $index
		});

		request.success(function(){
			console.log('Light Created');
			console.log($index);
			$scope.addLightForm = {};
			return false;
		}).
		error(function(data){
			console.log('Error: ' + data);
			return false;
		});

	};
};

function sensorForm($scope, $http) {
	$scope.formData = {};

};