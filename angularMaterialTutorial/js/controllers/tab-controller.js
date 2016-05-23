/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('tabController', tabController);

    /* dependency injection to ensure valid minified code */
    tabController.$inject = ['$scope'];

    //function
    function tabController ($scope) {
        $scope.data = {
            selectedIndex: 0,
            secondLocked:  true,
            secondLabel:   "2",
            bottom:        false
        };
        $scope.next = function() {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
        };
        $scope.previous = function() {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };
    }

})();

