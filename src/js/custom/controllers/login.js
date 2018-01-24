import {
  app
} from '../main.js';
app.controller("LoginController", ['Notification', "$http", "generalService", "httpPutService","$location", "$localStorage", "$scope", function(Notification, $http, generalService, httpPutService, $location, $localStorage, $scope) {
  var tThis = this;
  tThis.loginValidate = function(formName) {
    if (formName.$valid) {
      var _data = {
        "username": tThis.user,
        "password": tThis.pass,
      };
      httpPutService.logIn(_data).then(function(raspuns) {
          var data = raspuns.data;
          Notification.success("Login successfull");
          $localStorage.user = {
            username: tThis.user,
            token: data.token,
          };
          console.log($localStorage.user);
        console.log($scope.userData($localStorage.user),"iuiouygtiygiyftiyfiytfiytf");


          $location.path('/dashboard');
        },
        function(err) {
          Notification.error({
            message: 'Could not find user'
          });
        });

    } else {
      Notification.error({
        message: 'Username or password invalid'
      });
    }
  }
}])
