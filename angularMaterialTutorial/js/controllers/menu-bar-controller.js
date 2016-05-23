/**
 * Created by hongbojing on 5/23/16.
 */

(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('menuBarController', menuBarController);

    /* dependency injection to ensure valid minified code */
    menuBarController.$inject = ['$scope', '$mdDialog'];

    //function
    function menuBarController ($scope, $mdDialog) {
        this.sampleAction = function(name, ev) {
            $mdDialog.show($mdDialog.alert()
                .title(name)
                .textContent('Start learning "' + name + '!')
                .ok('OK')
                .targetEvent(ev)
            );
        };

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/23menuBar.png">' +
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

