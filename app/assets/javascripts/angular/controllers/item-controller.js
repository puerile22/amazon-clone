app.controller('ItemController', ['$scope','Item', function($scope, Item) {
  $scope.items = Item.query();
  $scope.allItem = true;
}]);