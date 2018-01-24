import {
  app
}from '../main.js'
app.controller("MainController", ["$localStorage", "$scope", function($localStorage, $scope){
  var tThis =this;
  tThis.user;
  $scope.userData= function(param){
  tThis.user = param;
  };
}])
