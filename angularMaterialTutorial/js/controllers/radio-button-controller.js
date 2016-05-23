/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('radioButtonController', radioButtonController);

    /* dependency injection to ensure valid minified code */
    radioButtonController.$inject = ['$scope', '$mdDialog'];

    //function
    function radioButtonController ($scope, $mdDialog) {
        $scope.radioData = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Banana', value: 'Banana' },
            { label: 'Mango', value: 'Mango', isDisabled: true },
            { label: 'Orange', value: 'Orange' }
        ];
        $scope.group='Banana';

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/26radioButton.png">' +
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

