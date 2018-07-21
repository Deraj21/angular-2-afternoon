angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrvc){
  mainSrvc.getPackageInfo()
    .then(res => {
      $scope.allPackages = res.data;
      if ($stateParams.id){
        $scope.package = $scope.allPackages.filter(item => item.id === parseInt($stateParams.id) )
        $scope.package = $scope.package[0];
      }
      $scope.packageIndex = $scope.allPackages.indexOf($scope.package);
    });
});