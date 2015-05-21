var app = angular.module('single-page',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'onePageApp.html'
        })
        .when('/about',{
           templateUrl: 'about.html'
        });
});

app.controller('cfgController',function($scope){

});