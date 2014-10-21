app.controller('ItemController', ['$scope','Item','$timeout','Order','$location','OrderService', function($scope, Item,$timeout,Order,$location,OrderService) {
  $scope.items = Item.query();
  $scope.allItem = true;
  
  $scope.addItem = function(item) {
    if (item.quantity >= parseInt(item.add) && parseInt(item.add) > 0) {
      item.quantity -= parseInt(item.add);
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
    OrderService.cart = [];
    OrderService.cart = $scope.cartItems;
    OrderService.order = '';
    OrderService.order = $scope.order;
    $location.path('/checkout');
    // $scope.allItem = false;
    // if ($scope.cartItems.length === 0) {
    //   $scope.empty = true;
    // } else {
    //   $scope.cart = true;
    // }
  };
}]);