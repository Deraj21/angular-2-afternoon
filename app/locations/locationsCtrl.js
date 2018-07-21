angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrvc){
  mainSrvc.getTravelInfo()
    .then(res => {
      $scope.locations = res.data;
      
    })
});