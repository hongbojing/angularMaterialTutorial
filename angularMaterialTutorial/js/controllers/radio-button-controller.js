/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('radioButtonController', radioButtonController);

    /* dependency injection to ensure valid minified code */
    radioButtonController.$inject = ['$scope'];

    //function
    function radioButtonController ($scope) {
        $scope.radioData = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Banana', value: 'Banana' },
            { label: 'Mango', value: 'Mango', isDisabled: true },
            { label: 'Orange', value: 'Orange' }
        ];
        $scope.group='Banana';
    }

})();

