/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('tooltipController', tooltipController);

    /* dependency injection to ensure valid minified code */
    tooltipController.$inject = ['$scope', '$mdDialog'];

    //function
    function tooltipController ($scope, $mdDialog) {
        $scope.demo = {
            showTooltip : false,
            tooltipDirection : ''
        };

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/38tooltip.png">' +
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

