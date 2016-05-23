/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('cardController', cardController);

    /* dependency injection to ensure valid minified code */
    cardController.$inject = ['$scope'];

    //function
    function cardController($scope){
        $scope.test = 'hello world';
    }

})();

