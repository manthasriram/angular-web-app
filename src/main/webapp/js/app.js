var app = angular.module("app", [ 'ngRoute' ]);

/** Define routes * */
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'index.html'
	}).otherwise({
		redirectTo : '/index.html'
	});
} ]);