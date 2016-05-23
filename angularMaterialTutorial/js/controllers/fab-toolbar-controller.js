/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('fabToolbarController', fabToolbarController);

    /* dependency injection to ensure valid minified code */
    fabToolbarController.$inject = ['$scope', '$mdDialog'];

    //function
    function fabToolbarController ($scope, $mdDialog) {
        $scope.isOpen = false;
        $scope.count = 0;
        $scope.selectedDirection = 'left';

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/15fabToolbar.png">' +
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

