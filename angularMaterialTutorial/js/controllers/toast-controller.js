/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('toastController', toastController);

    /* dependency injection to ensure valid minified code */
    toastController.$inject = ['$scope', '$mdToast', '$document'];

    //function
    function toastController ($scope, $mdToast, $document) {
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
    }

})();

