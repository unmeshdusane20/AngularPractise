var sampleApp = angular.module('sampleApp',[]); // define angular app module


// define routing for app
sampleApp.config(['$routeProvider',
    function($routeProvider) {
            $routeProvider.
             when('/AddNewOrder', {
                templateUrl: 'template/add_order.html',
                controller: 'AddOrderController'
            }).
            when('/ShowOrders', {
                templateUrl: 'template/show_orders.html',
                controller: 'ShowOrdersController'
            }).
            otherwise({
                redirectTo: '/routing'
            });
    }]);

sampleApp.controller('AddOrderController',function($scope){
   $scope.message="this is add new order scree";
});

sampleApp.controller('ShowOrdersController',function($scope){
   $scope.message= "This is show order screen";
});