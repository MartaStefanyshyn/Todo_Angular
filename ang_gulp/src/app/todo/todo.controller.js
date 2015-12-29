(function() {
  'use strict';

  angular
    .module('angularTutorial')
    .controller('TodoController', TodoController);

  /** @ngInject */
  function TodoController() {
    var vm = this;
    vm.todos = [
      {
        "description": "Test 1.",
        "status": 0
      },
      {
        "description": "Test 2.",
        "status": 0
      },
      {
        "description": "Test 3.",
        "status": 1
      }
    ];
    vm.submitted = false;
    vm.addTodo = function(){
      var newTodo = {
        description: vm.title,
        status: 0
      }
      vm.todos.push(newTodo);
      vm.title = ''
    }
    vm.deleteTodo = function(index){
      vm.todos.splice(index, 1);
    }
  }
})();
