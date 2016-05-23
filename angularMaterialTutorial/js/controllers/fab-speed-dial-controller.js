/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('fabSpeedDialController', fabSpeedDialController);

    /* dependency injection to ensure valid minified code */
    fabSpeedDialController.$inject = ['$scope'];

    //function
    function fabSpeedDialController ($scope) {
        this.topDirections = ['left', 'up'];
        this.bottomDirections = ['down', 'right'];
        this.isOpen = false;
        this.availableModes = ['md-fling', 'md-scale'];
        this.selectedMode = 'md-fling';
        this.availableDirections = ['up', 'down', 'left', 'right'];
        this.selectedDirection = 'up';
    }

})();

