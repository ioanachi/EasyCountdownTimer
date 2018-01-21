import {
  app
} from "../main.js"


app.controller("ImagesController", ["$scope", "$mdDialog", '$location', function($scope, $mdDialog, $location) {
  var tThis = this;
  tThis.trIndex = -1;


  tThis.imagesObj = [{
      name: "My Timer1",
      picture: "Cip1",
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
    var objToDelete = tThis.imagesObj[tThis.trIndex];
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

      tThis.imagesObj.splice(objToDelete, 1);
      tThis.trIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this timer.';
    });
  };


}])
