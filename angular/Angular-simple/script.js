// create the module and name it UDBlog
var UDBlog = angular.module("UDBlog",['ngRoute','ngAnimate']);

//configure the routes
UDBlog.config(function($routeProvider,$locationProvider){
	$routeProvider

	//route for the home page 
	.when('/',{
		redirectTo:'/home'
	})
	.when('/:slug',{
		templateUrl: 'pages/page.html',
		controller: 'routeController'
	})
	/*.when('/home',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})

	// route for the about page
	.when('/about',{
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})

	// route for the contact page 
	.when('/contact',{
		templateUrl:'pages/contact.html',
		controller: 'contactController'
	})*/
	
	.otherwise({
		templateUrl: 'pages/404.html'
	});

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
	
});

/*
create the controller and inject angulat's $scope
$http service is used to send AJAX request
*/

// Factory
UDBlog.factory('testFactory', function(){
    return {
        sayHello: function(text){
            return "Factory says \"Hello " + text + "\"";
        }  
    }               
}); 
 UDBlog.controller('appController',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
 		$http.get('pages.json').succes(function(data){
 			$rootScope.pages = data;
 		});	
 }]);

// service for getting weather
UDBlog.service('weatherService',function($http){
	this.weatherFor = function(zip){
		// code for $http to get the weateher
		return "30Deg";
	};
});

UDBlog.controller('routeController',['$scope','$routeParams',function($scope,$routeParams){

	// getting slug from parameter 
	var slug = $routeParams.slug;
	console.log(slug);
}]);

UDBlog.controller('mainController',['$scope','$http','weatherService','testFactory',function($scope,$http,weatherService,testFactory){
	
	$scope.pageClass = 'home';
	$scope.userDta = {};
	$scope.message = 'Everyone come and see how good Angular looks!';
	$scope.formData = {};	
	$scope.fromFactory = testFactory.sayHello("World");

	$scope.cities = [
		{ value: "Jalgaon", label: "Jalgaon"},
		{ value: "Pune", label: "Pune"}
	];

	$http({
		method: 'POST',
		url: 'pages.json'
	}).success(function(data)
	{
		$scope.newPosts = data;
	});

	$scope.weather = weatherService.weatherFor(421001);
	
	
	$scope.formData.selectedCity = "";
	$scope.update = function() {
		console.log($scope.item.id)
    };

	//process the form

	$scope.processForm = function(isValid){
		var myEl = angular.element(document.querySelector(".homeForm"));
		
		$scope.nameRequired = '';	
		$scope.passRequired = '';	
		$scope.cityRequired = '';	


		$scope.formData.formValid = true;
		if(!$scope.formData.name){
			$scope.nameRequired = "Name Required";
			$scope.formData.formValid = false;
		}
		if(!$scope.formData.pass){
			$scope.passRequired = "Password required";
			$scope.formData.formValid = false;
		}
		if(!$scope.formData.selectedCity){
			$scope.cityRequired = "City is required";
			$scope.formData.formValid = false;
		}
		
		if($scope.formData.formValid){
			myEl.removeClass("errorBox");
			console.log("inside formvalid success");			
			var request = $http({
				method: "post",
				url: "service.php",
				data: {
					username: $scope.formData.name,
					pass: $scope.formData.pass,
					city: $scope.formData.selectedCity
				},
				header: {
					'Content-Type' : 'application/x-www-form-urlencoded' 
				}
			});		
			request.success(function(data){
				console.log(data);
				if(data = "success"){
					$scope.formSuccess = "Data is submitted";
				}	
			});
			request.error(function(data){
				$scope.formSuccess = "Data is  not submitted";
			});	   				
		}else{
			myEl.addClass("errorBox");
		}	
		
	};
}]);

UDBlog.controller('aboutController',function($scope){
	$scope.pageClass = 'about';
	$scope.message = 'Look! I am in about page';
});



UDBlog.controller('contactController',['$scope','$http',function($scope,$http){
	
	$scope.pageClass = 'contact';
	$scope.userDta = {};
	$scope.message = 'Look! I am in contact page';
	$scope.formData = {};
	//$scope.userDta = userService.getUserData();
	$scope.cities = [
		{ value: "Jalgaon", label: "Jalgaon"},
		{ value: "Pune", label: "Pune"}
	];

	
	$scope.formData.selectedCity = "";
	$scope.update = function() {
		console.log($scope.item.id)
    };

	//process the form

	$scope.processForm = function(isValid){
		var myEl = angular.element(document.querySelector(".homeForm"));
		
		$scope.nameRequired = '';	
		$scope.passRequired = '';	
		$scope.cityRequired = '';	


		$scope.formData.formValid = true;
		if(!$scope.formData.name){
			$scope.nameRequired = "Name Required";
			$scope.formData.formValid = false;
		}
		if(!$scope.formData.pass){
			$scope.passRequired = "Password required";
			$scope.formData.formValid = false;
		}
		if(!$scope.formData.selectedCity){
			$scope.cityRequired = "City is required";
			$scope.formData.formValid = false;
		}
		
		if($scope.formData.formValid){
			myEl.removeClass("errorBox");
			console.log("inside formvalid success");			
			var request = $http({
				method: "post",
				url: "service.php",
				data: {
					username: $scope.formData.name,
					pass: $scope.formData.pass,
					city: $scope.formData.selectedCity
				},
				header: {
					'Content-Type' : 'application/x-www-form-urlencoded' 
				}
			});		
			request.success(function(data){
				console.log(data);
				if(data = "success"){
					$scope.formSuccess = "Data is submitted";
				}	
			});	   				
		}else{
			myEl.addClass("errorBox");
		}	
		
	};
}]);
/*UDBlog.controller('contactController',function($scope){
	$scope.pageClass = 'contact';
	$scope.message = 'Look! I am in contact page';
});
*/

// method 1: Service for fetching driverlist 



/* method 2 - to create service 
UDBlog.factory('userService',function(){
	var fac = {};
	fac.users = ['unmesh','dusane'];
	return fac;
});
*/

UDBlog.factory('ergastAPIservice',function($http){
	var  ergastAPI = {};
	ergastAPI.getDriver = function(){
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
		});
	}
	return ergastAPI;
});