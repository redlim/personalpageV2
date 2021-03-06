angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('app', {
          url: '/', 
          template: '<app></app>'
    })
      .state('blog', {
          url: '/blog',
          template: '<wi-blog></wi-blog>'
  })
      .state('contact', {
          url: '/contact',
          template: '<wi-contact></wi-contact>'
      });
}
