'use strict';

angular.module('xwarsBackendApp')
  .controller('RaceCtrl', function ($scope, $http, socket) {
    $scope.awesomeRaces = [];

    $http.get('/api/races').success(function(awesomeRaces) {
      $scope.awesomeRaces = awesomeRaces;
      socket.syncUpdates('race', $scope.awesomeRaces);
    });

    $scope.addRace = function() {
      if($scope.newRace === '') {
        return;
      }
      $http.post('/api/races', { name: $scope.newRace });
      $scope.newRace = '';
    };

    $scope.deleteRace = function(race) {
      $http.delete('/api/races/' + race._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('race');
    });
  });
