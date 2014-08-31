'use strict';


var pokerStructureModel = function (opts, $localStorage, $location, undefined) {
    opts = $.extend(true, {}, $localStorage.pokerData, opts);
    var smallBlind = opts.smallBlind || 25,
        bigBlind = opts.bigBlind || 50,
        stopClockBetweenLevels = opts.stopClockBetweenLevels === undefined ? true : opts.stopClockBetweenLevels,
        blindLevelTimeout = opts.blindLevelTimeout || 10,
        areBlindsValid,
        save;
    
    areBlindsValid = function () {
        var sB = this.smallBlind,
            bB = this.bigBlind;
            
        if (sB >= bB || 
            sB % 5 > 0 || 
            bB % 5 > 0 ||
            sB <= 0 || bB <= 0) { return false; }
        
        return true;
    };
    save = function () {
        if (this.areBlindsValid() === false) {
            /***
             * \TODO:
             *      display some error as to why you cannot save
             */
            return false;
        }
        
        $localStorage.pokerData = {
            smallBlind: this.smallBlind,
            bigBlind: this.bigBlind,
            stopClockBetweenLevels: this.stopClockBetweenLevels,
            blindLevelTimeout: this.blindLevelTimeout
        };
        
        // redirect to our about page
        $location.url('/about');
    };
        
    return {
        smallBlind: smallBlind,
        bigBlind: bigBlind,
        stopClockBetweenLevels: stopClockBetweenLevels,
        blindLevelTimeout: blindLevelTimeout,
        areBlindsValid: areBlindsValid,
        save: save
    };
};


/**
 * @ngdoc function
 * @name pokerappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokerappApp
 */
angular.module('pokerappApp')
  .controller('MainCtrl', function ($scope, $localStorage, $location) {
      /**
       * Structure of the poker stuff
       */
    $scope.pokerStructure = new pokerStructureModel({}, $localStorage, $location);
    console.log($localStorage, $scope);
    /** 
     * When the small or large blinds change then watch...
     */
    $scope.$watch('pokerStructure', function (newValue, oldValue) {
        if (!newValue.areBlindsValid()) {
            $('input#bigblind').parent().parent().addClass('error');
            return false;
        }
        
        $('input#bigblind').parent().parent().removeClass('error');
    }, true);
    
  });