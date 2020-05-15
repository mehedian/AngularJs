(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller(`LunchCheckController`, LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.item = "";
    $scope.update = "";
    $scope.colo = "";

    $scope.check = function () {
      var name = $scope.item.split(",").length;
      if ($scope.item === "") {
        $scope.update = "enter some input";
        $scope.colo = "red";
      }
      else if (name <= 3) {
        $scope.update = "enjoy";
        $scope.colo = "green";
      }
      else {
        $scope.update = "too much";
        $scope.colo = "yellow";
      }
  
    };
     

  }

})();
