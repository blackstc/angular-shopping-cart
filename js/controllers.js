app.controller("HomeController", ["$scope", "$http", function($scope, $http) {
  $scope.categories = [];
  $scope.checkoutBag = [];
  $scope.checkout = false;

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
  });

  $scope.priceSort = function(tea) {
    if ($scope.price === "Low to High") {
      return tea.price;
    } else {
      return -tea.price;
    }
  };

  $scope.addTeaBags = function() {
    var tea = this.tea;
    if (this.quantity === undefined) {
      tea.quantity = 1;
    } else {
      tea.quantity = +this.quantity;
    }

    $scope.checkoutBag.push(tea);
    console.log($scope.checkoutBag);
    updateCart();
  };

  updateCart = function() {
    if ($scope.checkoutBag.length !== 0) {
      $scope.checkoutQty = "(" + $scope.checkoutBag.length + ")";
    } else {
      $scope.checkoutQty = "Empty!";
    }
  };

  updateCart();
}]);
