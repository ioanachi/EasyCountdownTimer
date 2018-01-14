import {
  app
} from "../main.js"


app.controller("UsersController", ["$scope", "$mdDialog", '$location', function($scope, $mdDialog, $location) {
  var tThis = this;
  tThis.trIndex = -1;


  tThis.usersObj = [{
      name: "Ciprian",
      surname: "Turcu",
      username: "ciprianturcu",
      email: "myEmail@mail.com",
      type: "Admin",

    },
    {
        name: "John",
        surname: "Doe",
        username: "johnny",
        email: "Email@mail.com",
        type: "user",

      }
  ];
  tThis.clicked = function(index) {
    console.log(index);
    tThis.trIndex = index;
  };


  tThis.goToEdit = function() {
    $location.path('/users/edit/' + tThis.trIndex)
  };

  $scope.showConfirm = function(ev) {
    var objToDelete = tThis.usersObj[tThis.trIndex];
    console.log(objToDelete, "objToDelete");
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete timer?')
      .ariaLabel('Lucky day')
      .targetEvent(ev)
      .ok('Yes')
      .cancel('No');
    $mdDialog.show(confirm).then(function() {

      $scope.status = 'You decided to delete this timer.';

      tThis.usersObj.splice(objToDelete, 1);
      tThis.trIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this timer.';
    });
  };


}])
