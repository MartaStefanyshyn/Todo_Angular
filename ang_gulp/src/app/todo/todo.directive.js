(function() {
  'use strict';

  angular
    .module('angularTutorial')
    .directive('todoListDirective', todoListDirective);

  /** @ngInject */
  function todoListDirective() {
    return {
          restrict: "EAC",
          scope: {
            header: "@",
            todoList: "=",
            statusType: "@"
        },
        templateUrl: 'app/todo/list.html'
    };
    // return {
    //   retrict: 'E',
    //   link: function(scope, e, a){
    //     scope.hello = "Hello"
    //   },
    //   templateUrl: 'app/todo/list.html'
    // };
  }
})();
