/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('virtualRepeatController', virtualRepeatController);

    /* dependency injection to ensure valid minified code */
    virtualRepeatController.$inject = ['$scope', '$mdDialog'];

    //function
    function virtualRepeatController ($scope, $mdDialog) {
        $scope.items = [];
        for (var i = 0; i < 1000; i++) {
            $scope.items.push(i);
        }

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/40virtualRepeat.png">' +
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

