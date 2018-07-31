angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrvc){
  mainSrvc.getPackageInfo()
    .then(res => {
      $scope.allPackages = res.data;
      $scope.packages = $scope.allPackages.filter(item => item.country === $stateParams.country);
    })
});
