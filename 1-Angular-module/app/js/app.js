
//MODULE
var myApp = angular.module('myApp',[]);

//CONTROLLER
myApp.controller('myCtrl',['$scope',function($scope){

 $scope.message = "Welcome in Angularjs ";
 console.log($scope.message);
}]);