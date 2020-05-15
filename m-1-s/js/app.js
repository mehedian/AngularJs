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
        $scope.update = "Please enter data first";
        $scope.colo = "red";
      }
      else if (name <= 3) {
        $scope.update = "Enjoy!";
        $scope.colo = "green";
      }
      else {
        $scope.update = "Too much!";
        $scope.colo = "yellow";
      }
  
    };
     

  }

})();
