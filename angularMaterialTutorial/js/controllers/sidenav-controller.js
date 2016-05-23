/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('sidenavController', sidenavController);

    /* dependency injection to ensure valid minified code */
    sidenavController.$inject = ['$scope', '$mdSidenav', '$mdDialog'];

    //function
    function sidenavController ($scope, $mdSidenav, $mdDialog) {
        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
        $scope.openRightMenu = function() {
            $mdSidenav('right').toggle();
        };

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/28sidenav.png">' +
                '  </md-dialog-content>' +
                '</md-dialog>',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                }
            });
        };
    }

})();

