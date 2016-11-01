angular
    .module('app')
    .component('wiBlog', {
        templateUrl: 'app/blog/blog.html',
        controller: wiBlogController

    });

/** @ngInject */
function wiBlogController($firebaseArray) {
    var vm = this;

    var ref = firebase.database().ref().child("Posts");
    vm.posts    = $firebaseArray(ref);

}
