'use strict';

angular.module('xwarsBackendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('races', {
        url: '/races',
        templateUrl: 'app/race/races.html',
        controller: 'RacesCtrl'
      });
  });