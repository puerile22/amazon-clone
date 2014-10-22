app.controller('OrderController', ['$scope','Item','$timeout','Order','$location','OrderService','History', function($scope, Item,$timeout,Order,$location,OrderService,History) {
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
        $scope.history = new History();
        $scope.history.quantity = $scope.cartItems[i].add;
        $scope.history.user = $scope.order.person;
        $scope.history.item_id = $scope.cartItems[i].id;
        $scope.history.$save();
      }
      $scope.order.$save();
      $scope.cart = false;
      // $scope.purchase = true;
      OrderService.person = $scope.order.person;
    }
    $location.path('/history');
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