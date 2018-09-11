angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
	var name, code, latitude, longitude, address;
	name = document.getElementById("name");
	code = document.getElementById("code");
	latitude = document.getElementById("latitude");
	longitude = document.getElementById("longitude");
	address = document.getElementById("address");
	
	//$scope.listings.push({"code": code,\n"name": name,\n"coordinates": {\n"latitude": latitude,\n"longitude": longitude\n},\n"address": address});
    	
    };
    $scope.deleteListing = function($index) {
	Listings.splice($index,1);
    };
    $scope.showDetails = function($index) {
	$scope.detailedInfo = Listings[$index];
	console.log($scope.detailedInfo);
    };
  }
]);