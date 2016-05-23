/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('toastController', toastController);

    /* dependency injection to ensure valid minified code */
    toastController.$inject = ['$scope', '$mdToast', '$mdDialog', '$document'];

    //function
    function toastController ($scope, $mdToast, $mdDialog, $document) {
        $scope.showToast1 = function() {
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Hello World!')
                    .hideDelay(3000)
            );
        };

        $scope.showToast2 = function() {
            var toast = $mdToast.simple()
                .textContent('Hello World!')
                .action('OK')
                .highlightAction(false);
            $mdToast.show(toast).then(function(response) {
                if ( response == 'ok' ) {
                    alert('You clicked \'OK\'.');
                }
            });
        }

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/36toast.png">' +
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

