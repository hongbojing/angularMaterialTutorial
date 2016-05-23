/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('contentController', contentController);

    /* dependency injection to ensure valid minified code */
    contentController.$inject = ['$scope'];

    //function
    function contentController($scope){
        $scope.test = 'hello world';
    }


})();

