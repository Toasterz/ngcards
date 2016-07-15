(function()
{
  angular.module('ngcards')
        .controller('MainController', MainController);

        MainController.$inject = ['$scope', 'cardService'];

        function MainController($scope, cardService)
        {
          $scope.cards = cardService.cards;
          $scope.create = createCard;
          $scope.delete = deleteCard;
          $scope.edit = editCard;
          $scope.update = updateCard;

          getCards();

          function getCards()
          {
            cardService.readAll()
                      .then(function()
                    {
                      $scope.cards = cardService.cards;
                      console.log($scope.cards);
                    })
          }

          function createCard(name)
          {
            cardService.create(name)
                      .then(function()
                    {
                      $scope.name = '';
                      getCards();
                    })
          }
          function deleteCard(name)
          {
            cardService.delete(name)
                      .then(function()
                    {
                      getCards();
                    })
          }
        }
      })();
