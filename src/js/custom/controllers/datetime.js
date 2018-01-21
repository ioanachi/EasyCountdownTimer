import {
  app
} from "../main.js"


app.controller("DatetimeController", ["$scope", "$mdDialog", '$location', function($scope, $mdDialog, $location) {
  var tThis = this;
  tThis.trIndex = -1;


  tThis.datetimeObj = [{
      name: "My Timer1",
      type: "Cip1",
      preview: "Style 1",
    }
  ];
  tThis.clicked = function(index) {
    console.log(index);
    tThis.trIndex = index;
  };


  tThis.goToEdit = function() {
    $location.path('/timers/edit/' + tThis.trIndex)
  };

  $scope.showConfirm = function(ev) {
    var objToDelete = tThis.datetimeObj[tThis.trIndex];
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

      tThis.datetimeObj.splice(objToDelete, 1);
      tThis.trIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this timer.';
    });
  };


}])
