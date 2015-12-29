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
        templateUrl: 'app/todo/list.html',
        link: function(scope, elem, attrs){
          var count = 0;
          angular.forEach(scope.todoList, function (item) {
              if (item.status === scope.statusType * 1) {
                  count++;

              }
          });
          scope.count = count;
        }
    };
  }
})();
