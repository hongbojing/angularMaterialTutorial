/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('menuController', menuController);

    /* dependency injection to ensure valid minified code */
    menuController.$inject = ['$scope', '$mdDialog'];

    //function

    function menuController ($scope, $mdDialog) {
        var originatorEv;
        this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
        this.menuItemClick = function(index) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('TutorialsPoint.com')
                    .textContent('Menu Item clicked, index: ' + index)
                    .ok('OK')
                    .targetEvent(originatorEv)
            );
            originatorEv = null;
        };

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/22menu.png">' +
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
