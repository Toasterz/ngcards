(function()
{
  angular.module('ngcards')
        .factory('cardService', cardService);

        cardService.$inject = ['$http'];

        functtion cardService($http)
        {
          var baseUrl = 'http:localhost:8080'
          var cardobj =
          {
            create: createCard,
            readAll: getAll,
            update: updateCard,
            delete: deleteCard,
            cards: []
          };
          return cardobj;

          function getAll()
          {
            return $http.get('http://localhost:8080/todos')
                        .then(function(res)
                      {
                        cardobj.todos = res.data;
                      });
          }
          function createCard(name)
          {
            var info =
            {
              name: name
            };
            return $http.post(baseUrl+'todos',  info)
                        .then(function(res)
                      {
                        console.log('create', res);
                        getAll();
                      });
          }
          function deleteCard(name)
          {

          }
        }
})
