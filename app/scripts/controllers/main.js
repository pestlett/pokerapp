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
        smallBlind: 25,
        bigBlind: 50,
        /* in seconds, default ten minutes */
        roundInterval: 600
    };
    
    /**
     * When the small or large blinds change then watch...
     */
    $scope.$watch('pokerStructure', function (newValue, oldValue) {
        if ($scope.bigBlind <= $scope.smallBlind) {
            alert('Waaaaaaaaaaaaaaaaaaaa');
            return false;
        }
    }, true);
    
  });
