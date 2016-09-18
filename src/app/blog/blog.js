angular
    .module('app')
    .component('wiBlog', {
        templateUrl: 'app/blog/blog.html',
        controller: wiBlogController
    });

/** @ngInject */
function wiBlogController($http) {
    var vm = this;

}
