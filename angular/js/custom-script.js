/*
var myOnePageApp = angular.module('myOnePageApp',['ngRoute']);  // create module and name it myOnePageApp

myOnePageApp.config(function($routeProvider){
   $routeProvider
    //when for the page
       .when('/',{
           templateUrl : '../onPage.html',
           controller : 'mainController'
       })
        // route for about page
       .when('/about',{
           templateUrl : '../onPageAbout.html',
           controller : 'aboutController'
       })
       // route for about page
       .when('/contact',{
           templateUrl : '../onPageContact.html',
           controller : 'contactController'
       });
});


// create controller and injects angular's $scope

myOnePageApp.controller('mainController',function($scope){
    // create a message to display in outr view
    $scope.message = 'inside message';
});

myOnePageApp.controller('aboutController',function($scope){
    $scope.message="inside about contorlle";
});


myOnePageApp.controller('contactController',function($scope){
    $scope.message="inside contact contorlle";
});*/
