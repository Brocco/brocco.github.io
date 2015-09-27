var brocco = angular.module('brocco', ['ui.router']);

brocco.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')
  $stateProvider.state('home', {
    url: '/home',
    template: '<h1>HOME</h1>'
  })
  .state('talks', {
    url: '/talks',
    template: '<h1>TALKS</h1>'
  });
})