angular.module('devmtnTravel')
.service('mainSrvc', function($http) {
  this.getTravelInfo = () => $http.get('https://practiceapi.devmountain.com/api/travel/travel-info');

  this.getPackageInfo = () => $http.get('https://practiceapi.devmountain.com/api/travel/package-info');
});