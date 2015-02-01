'use strict';

angular.module('xwarsBackendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('races', {
        url: '/races',
        templateUrl: 'app/race/races.html',
        controller: 'RacesCtrl'
      })

      .state('race-detail', {
        url: '/race/:id',
        templateUrl: 'app/race/race-detail.html',
        controller: 'RaceDetailCtrl'
      });
  });