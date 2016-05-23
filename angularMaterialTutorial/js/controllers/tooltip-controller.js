/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('tooltipController', tooltipController);

    /* dependency injection to ensure valid minified code */
    tooltipController.$inject = ['$scope'];

    //function
    function tooltipController ($scope) {
        $scope.demo = {
            showTooltip : false,
            tooltipDirection : ''
        };
    }

})();

