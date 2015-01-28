'use strict';

angular.module('xwarsBackendApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('race', {
        url: '/race',
        templateUrl: 'app/race/race.html',
        controller: 'RaceCtrl'
      });
  });