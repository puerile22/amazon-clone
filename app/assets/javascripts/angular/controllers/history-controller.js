app.controller('HistoryController', ['$scope', '$location', 'OrderService', 'History', 'Item', function($scope, $location, OrderService, History, Item) {
  $scope.histories = History.query({user:OrderService.person},function() {
    for(var i = 0;i < $scope.histories.length;i++) {
      $scope.histories[i].item = Item.get({id:$scope.histories[i].item_id});
    }
  });
  $scope.keepShopping = function() {
    $location.path('/');
  };
  $scope.viewOrders = function() {
    $location.path('/orderlist');
  };
}]);