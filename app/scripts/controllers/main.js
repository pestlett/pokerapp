'use strict';

/**
 * @ngdoc function
 * @name pokerappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokerappApp
 */
angular.module('pokerappApp')
  .controller('MainCtrl', function ($scope) {
      /**
       * Structure of the poker stuff
       */
    $scope.pokerStructure = {
        "smallBlind": 25,
        "largeBlind": 50,
        /* in seconds, default ten minutes */
        "roundInterval": 600
    };
    
    $scope.updateSmallBlind = function () {};
    $scope.updateBigBlind = function () {};
    
  });
