
app = angular.module('todoApp', []);

var model = {};

app.run(function(){
  list = {
    "todos": [
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
    ]
  }
});

app.controller('todoController', function() {
    var vm = this;
    vm.todos = list.todos;
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
});

app.directive("todoListDirective", function () {
        return {
            restrict: "EAC",
            scope: {
                header: "@",
                todoList: "=",
                statusType: "@"
            },
            template: function () {
                return angular.element(document.querySelector("#todoListTemplate")).html();
            },
        };
    });
