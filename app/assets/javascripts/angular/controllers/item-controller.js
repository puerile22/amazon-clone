app.controller('ItemController', ['$scope','Item','$timeout','Order','$location', function($scope, Item,$timeout,Order,$location) {
  $location.path('/');
  $scope.items = Item.query();
  $scope.allItem = true;
  $scope.cart = false;
  $scope.purchase = false;
  $scope.empty = false;
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
    $scope.order = new Order();
    $scope.order.cost = 0;
    for (var i = 0;i < $scope.items.length;i++) {
      if ($scope.items[i].add !== undefined) {
        $scope.cartItems.push($scope.items[i]);
        $scope.order.cost += parseInt($scope.items[i].add) * parseInt($scope.items[i].price);
      }
    }
    $scope.allItem = false;
    if ($scope.cartItems.length === 0) {
      $scope.empty = true;
    } else {
      $scope.cart = true;
    }
  };
  $scope.submit = function() {
    if ($scope.order.person == null) {
      $scope.nameEmpty = true;
      $timeout(function() {
        $scope.nameEmpty =false;
      },1000);
    } else {
      for (var i = 0;i < $scope.cartItems.length;i++) {
        $scope.cartItems[i].$update();
      }
      $scope.order.$save();
      $scope.cart = false;
      $scope.purchase = true;
    }
  };
  $scope.keepShopping = function() {
    $scope.empty = false;
    $scope.cart = false;
    $scope.purchase = false;
    $scope.allItem = true;
  }
}]);