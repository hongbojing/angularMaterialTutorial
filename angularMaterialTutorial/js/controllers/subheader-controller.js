/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('subheaderController', subheaderController);

    /* dependency injection to ensure valid minified code */
    subheaderController.$inject = ['$scope', '$mdDialog'];

    //function
    function subheaderController ($scope, $mdDialog) {
        $scope.fruitNames = ['Apple', 'Banana', 'Orange'];
        $scope.vegNames = ['Carrot', 'Potato', 'Cabbage'];
        $scope.eateries = ['Milk', 'Bread'];

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/30subheader.png">' +
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

