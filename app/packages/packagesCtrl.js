angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrvc){
  mainSrvc.getPackageInfo()
    .then(res => {
      $scope.allPackages = res.data;
      $scope.packages = $scope.allPackages.filter(item => item.country === $stateParams.country);
    })
});

/**
city - String.
country - String.
desc - String.
id - Number.
image - String ( a filepath to a specific image in the img/ folder ).
price - Number.
 */