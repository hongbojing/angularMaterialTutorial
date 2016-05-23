/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('inputController', inputController);

    /* dependency injection to ensure valid minified code */
    inputController.$inject = ['$scope'];

    //function
    function inputController ($scope) {
        $scope.project = {
            comments: 'Comments',
        };
    }

})();

