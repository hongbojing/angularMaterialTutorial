/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('typographyController', typographyController);

    /* dependency injection to ensure valid minified code */
    typographyController.$inject = ['$scope'];

    //function
    function typographyController($scope){
        $scope.test = 'hello world';
    }

})();

