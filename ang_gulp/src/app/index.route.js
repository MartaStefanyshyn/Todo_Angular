(function() {
  'use strict';

  angular
    .module('angularTutorial')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('todolist', {
        url: '/todo_list',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoController',
        controllerAs: 'todo'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
