app.factory('Item', function($resource) {
  return $resource(
    '/items/:id',
    {id:'@id'},
    {update:{method:'PATCH'}}
  );
});