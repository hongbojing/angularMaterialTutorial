/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('swipeController', swipeController);

    /* dependency injection to ensure valid minified code */
    swipeController.$inject = ['$scope'];

    //function
    function swipeController ($scope) {
        $scope.onSwipeLeft = function(ev) {
            alert('Swiped Left!');
        };
        $scope.onSwipeRight = function(ev) {
            alert('Swiped Right!');
        };
        $scope.onSwipeUp = function(ev) {
            alert('Swiped Up!');
        };
        $scope.onSwipeDown = function(ev) {
            alert('Swiped Down!');
        };
    }

})();

