app.controller('ItemController', ['$scope','Item', function($scope, Item) {
  $scope.items = Item.query();
  $scope.allItem = true;
  $scope.addItem = function(item) {
    if (item.quantity >= parseInt(item.add)) {
      item.quantity -= parseInt(item.add);
      item.$update();
    } else {
      $scope.itemQuantity = true;
    }
  }
}]);