/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('fabSpeedDialController', fabSpeedDialController);

    /* dependency injection to ensure valid minified code */
    fabSpeedDialController.$inject = ['$scope', '$mdDialog'];

    //function
    function fabSpeedDialController ($scope, $mdDialog) {
        this.topDirections = ['left', 'up'];
        this.bottomDirections = ['down', 'right'];
        this.isOpen = false;
        this.availableModes = ['md-fling', 'md-scale'];
        this.selectedMode = 'md-fling';
        this.availableDirections = ['up', 'down', 'left', 'right'];
        this.selectedDirection = 'up';

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/14fabSpeedDial.png">' +
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

