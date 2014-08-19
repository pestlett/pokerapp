'use strict';

/**
 * @ngdoc function
 * @name pokerappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pokerappApp
 */
angular.module('pokerappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
