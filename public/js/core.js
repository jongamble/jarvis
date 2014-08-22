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
	$scope.light = {};
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

	$scope.lightFormPost = function($index){
		var request = $http({
			method: "post",
			url: "/settings/createLight",
			data: $index
		}).
		success(function(data){
			if(data == 'false'){
				console.log('Light create failed. That ID is in use.');
				console.log(data);
			}else{
				console.log('Light Created');
				console.log(data);
				$scope.light = {};
				listLights();
			}
			return false;
		}).
		error(function(data){
			console.log('Error: ' + data);
			return false;
		});

	};

	$scope.deleteLight = function($index){
		$http.delete('/settings/deleteLight/' + $index)
			.success(function(data) {
				$scope.light = data;
				listLights();
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}
};

function editLight($scope, $http, $window) {
	

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
	


	$scope.editLightForm = function(){
		
		console.log(this.light);
		$http({
			method: 'post',
			url: "/settings/editLight/" + this.light.id,
			data: this.light
		}).
		success(function(data){
			console.log('Light Updated');
			$window.location.href = '/settings';
		}).
		error(function(data){
			console.log('Error: ' + data);
			return false;
		});
	};
}



function sensorsController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all todos and show them
	function listSensors(){
		$http.get('/sensors/listSensors')
			.success(function(data) {
				$scope.sensors = data;
				//console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}
	listSensors();
};


function sensorForm($scope, $http) {
	$scope.formData = {};

	$scope.sensor = {};
// when landing on the page, get all todos and show them
	function listSensors(){
		$http.get('/sensors/listSensors')
			.success(function(data) {
				$scope.sensors = data;
				//console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}
	listSensors();

	$scope.sensorFormPost = function($index){
		var request = $http({
			method: "post",
			url: "/settings/createSensor",
			data: $index
		}).
		success(function(data){
			if(data == 'false'){
				console.log('Sensor create failed. That ID is in use.');
				console.log(data);
			}else{
				console.log('Sensor Created');
				console.log(data);
				$scope.sensor = {};
				listSensors();
			}
			return false;
		}).
		error(function(data){
			console.log('Error: ' + data);
			return false;
		});

	};

	$scope.deleteSensor = function($index){
		$http.delete('/settings/deleteSensor/' + $index)
			.success(function(data) {
				$scope.sensor = data;
				listSensors();
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}
};