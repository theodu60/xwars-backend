'use strict';

angular.module('xwarsBackendApp')
  .controller('RaceCtrl', function ($scope, $http, socket) {
    $scope.Races = [];
	  $scope.newRace = {};

    $http.get('/api/races').success(function(Races) {
      $scope.Races = Races;
      socket.syncUpdates('race', $scope.Races);
    });

    $scope.addRace = function() {
	    console.log("addRace");
      if($scope.newRace === '') {
        return;
      }
      $http.post('/api/races', $scope.newRace);
      $scope.newRace = {};
    };

    $scope.deleteRace = function(race) {
      $http.delete('/api/races/' + race._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('race');
    });
  });
