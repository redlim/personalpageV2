angular
    .module('app')
    .component('wiContact', {
        templateUrl: 'app/contact/contact.html',
        controller: wiContactController
    });

/** @ngInject */
function wiContactController($scope,$firebaseArray) {
    var ref = firebase.database().ref().child("data");
    // create a synchronized array
    $scope.messages = $firebaseArray(ref);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addMessage = function() {
        $scope.messages.$add({
            contactName : $scope.contactName,
            text: $scope.contactMessage
        });
    };
}
