app.controller('OrderController', ['$scope','Item','$timeout','Order','$location','OrderService', function($scope, Item,$timeout,Order,$location,OrderService) {
  if (OrderService.cart.length === 0) {
    $scope.cart = false;
    $scope.empty = true;
  } else {
    $scope.empty = false;
    $scope.cart = true;
  }
  $scope.purchase = false;
  $scope.order = OrderService.order;
  $scope.cartItems = OrderService.cart;
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
    $location.path('/');
  };
  $scope.viewOrders = function() {
    $location.path('/orderlist');
  };
}]);