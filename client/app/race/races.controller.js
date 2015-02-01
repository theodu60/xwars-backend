'use strict';

angular.module('xwarsBackendApp')
  .controller('RacesCtrl', function ($scope, $http, socket) {
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
  })

  .controller('RaceDetailCtrl', function ($scope, $http, socket, $location) {
    $scope.Race = {};

    $scope.addRace = function() {
      console.log("addRace");
      if($scope.Race === '') {
        return;
      }
      $http.post('/api/races', $scope.Race);
      $location.path('/races');
    };

    $scope.deleteRace = function(race) {
      $http.delete('/api/races/' + race._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('race');
    });
  });

