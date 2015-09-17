var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "../partials/home.html",
    controller: "HomeController"
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
