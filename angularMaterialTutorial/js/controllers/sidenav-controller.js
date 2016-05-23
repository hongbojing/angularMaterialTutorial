/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('sidenavController', sidenavController);

    /* dependency injection to ensure valid minified code */
    sidenavController.$inject = ['$scope', '$mdSidenav'];

    //function
    function sidenavController ($scope, $mdSidenav) {
        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
        $scope.openRightMenu = function() {
            $mdSidenav('right').toggle();
        };
    }

})();

