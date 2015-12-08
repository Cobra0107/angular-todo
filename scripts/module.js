var todoApp = angular.module("todoModule",[]);

var todoController = function($scope) {
  $scope.names = ['Amruta','Kaustubh','Shruti','Parag'];
};

todoApp.controller("todoController",todoController);
