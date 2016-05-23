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
    }

})();

