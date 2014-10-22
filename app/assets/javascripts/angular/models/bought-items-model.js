app.factory('History', function($resource) {
  return $resource(
    '/histories/:id',
    {id:'@id'}
  );
});