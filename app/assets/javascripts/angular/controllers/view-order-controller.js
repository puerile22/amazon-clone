app.controller('ViewOrderController', ['$scope','Item','$timeout','Order','$location','OrderService', function($scope, Item,$timeout,Order,$location,OrderService) {
  $scope.orders = Order.query();
  $scope.keepShopping = function() {
    $location.path('/');
  };
}]);