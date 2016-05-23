/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('bottomSheetController', bottomSheetController);

    /* dependency injection to ensure valid minified code */
    bottomSheetController.$inject = ['$scope', '$mdBottomSheet', '$mdDialog'];

    function bottomSheetController ($scope, $mdBottomSheet, $mdDialog) {
        $scope.openBottomSheet = function() {
            $mdBottomSheet.show({
                template: '<md-bottom-sheet>Learn <b>Angular Material</b> @ TutorialsPoint.com!</md-bottom-sheet>'
            });
        };

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/2bottomSheet.png">' +
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
