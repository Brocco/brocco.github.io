var brocco = angular.module('brocco', ['ui.router']);

brocco.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'home.html'
  })
  .state('talks', {
    url: '/talks',
    templateUrl: 'talks.html'
  });
})