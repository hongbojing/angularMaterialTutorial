/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('contactChipController', contactChipController);

    /* dependency injection to ensure valid minified code */
    contactChipController.$inject = ['$scope', '$mdDialog'];

    //function
    function contactChipController ($scope, $mdDialog) {
        var self = this;
        self.querySearch = querySearch;
        self.allContacts = loadContacts();
        self.contacts = [self.allContacts[0]];
        self.filterSelected = true;

        function querySearch (query) {
            var results = query ?
                self.allContacts.filter(createFilterFor(query)) : [];
            return results;
        }

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(contact) {
                return (contact._lowername.indexOf(lowercaseQuery) != -1);;
            };
        }

        function loadContacts() {
            var contacts = [
                'Roberto Karlos',
                'Bob Crestor',
                'Nigel Rick',
                'Narayana Garner'
            ];
            return contacts.map(function (c, index) {
                var cParts = c.split(' ');
                var contact = {
                    name: c,
                    email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
                    image: 'http://lorempixel.com/50/50/people?' + index
                };
                contact._lowername = contact.name.toLowerCase();
                return contact;
            });
        }

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/9contactChip.png">' +
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

