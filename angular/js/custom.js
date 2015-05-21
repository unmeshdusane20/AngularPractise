// step to define controller using module

var myApp = angular.module('myApp',[]);

myApp.controller('ContactController', ['$scope', function($scope) {
    $scope.contacts = ["hi@email.com", "hello@email.com"];

    $scope.add = function() {
        $scope.contacts.push($scope.newContact);
        $scope.newContact = "";
    }
}]);


/*
// another way to define controller
function ContactController($scope){
    $scope.contacts = ['unmesh.dusane@weboniselab.com','unmesdusane@weboniselab.com'];
    $scope.add = function(){
        $scope.contacts.push($scope.newContact);
        $scope.newContact="";
    }
}
*/


