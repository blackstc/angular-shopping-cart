app.controller("HomeController", ["$scope", "$http", function($scope, $http) {
  $scope.categories = [];

  //get all teas from JSON
  $http.get("../files/teas.json")
  .then(function(data) {
    $scope.teas = data.data;

    //push unique catories into the scope for the drop-down to sort by categories
    for (var i = 0; i < $scope.teas.length; i++) {
      for (var k = 0; k < $scope.teas[i].categories.length; k++) {
        if ($scope.categories.indexOf($scope.teas[i].categories[k]) === -1) {
          $scope.categories.push($scope.teas[i].categories[k]);
        }
      }
    }
    console.log($scope.categories);
  });


}]);
