import {
  app
} from '../main.js';
app.controller("RegisterController", ['Notification', '$http', 'generalService', 'httpPutService', '$location', function(Notification, $http, generalService, httpPutService, $location) {
  var tThis = this;
  tThis.typeU = 1;
  tThis.validationForm = function(formName) {
    if (formName.$valid) {
      var _data = {
        "name": tThis.userName,
        "surname": tThis.userSurname,
        "username": tThis.usernameUser,
        "email": tThis.userEmail,
        "type": tThis.typeU,
        "password": tThis.pass1
      };
      httpPutService.newUser(_data).then(function(raspuns) {
          Notification.success({message: 'User Created'});
$location.path("/login");
      },
    function(error){
      console.log(error.data);

      if(error.data=="SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry 'rty@rty' for key 'Email'"){}
      Notification.error({message: 'Email already registered'});
    })
    }
    else{
      Notification.error({message: 'Could not add user'});
    }
  };
}]);
