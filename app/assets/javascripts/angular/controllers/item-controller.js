app.controller('ItemController', ['$scope','Item','$timeout', function($scope, Item,$timeout) {
  $scope.items = Item.query();
  $scope.allItem = true;
  $scope.cart = false;
  $scope.purchase = false;
  $scope.addItem = function(item) {
    if (item.quantity >= parseInt(item.add) && parseInt(item.add) > 0) {
      item.quantity -= parseInt(item.add);
      // item.$update();
    } else {
      $scope.itemQuantity = true;
      item.add = undefined;
      $timeout(function() {
        $scope.itemQuantity =false;
      },1000);
    }
  };
  $scope.checkout = function() {
    $scope.cartItems = [];
    $scope.price = 0;
    for (var i = 0;i < $scope.items.length;i++) {
      if ($scope.items[i].add !== undefined) {
        $scope.cartItems.push($scope.items[i]);
        $scope.price += parseInt($scope.items[i].add) * parseInt($scope.items[i].price);
      }
    }
    $scope.allItem = false;
    $scope.cart = true;
  };
  $scope.submit = function() {
    for (var i = 0;i < $scope.cartItems.length;i++) {
      $scope.cartItems[i].$update();
    }
    $scope.cart = false;
    $scope.purchase = true;
  };
  $scope.keepShopping = function() {
    $scope.allItem = true;
    $scope.cart = false;
    $scope.purchase = false;
  }
}]);