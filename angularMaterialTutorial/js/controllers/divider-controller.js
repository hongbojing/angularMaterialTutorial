/**
 * Created by hongbojing on 5/23/16.
 */
(function() {
    'use strict';

    angular
        .module('firstApplication')
        .controller('dividerController', dividerController);

    /* dependency injection to ensure valid minified code */
    dividerController.$inject = ['$scope', '$mdDialog'];

    //function
    function dividerController ($scope, $mdDialog) {
        var self = this;
        self.allContacts = loadContacts();
        self.contacts = [self.allContacts[0]];

        $scope.showCustom = function(event) {
            $mdDialog.show({
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                template: '<md-dialog>' +
                '  <md-dialog-content>' +
                '<img src="../img/codePic/13divider.png">' +
                '  </md-dialog-content>' +
                '</md-dialog>',
                controller: function DialogController($scope, $mdDialog) {
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                }
            });
        };

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
    }

})();

