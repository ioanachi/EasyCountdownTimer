import {
  app
} from "../main.js"


app.controller("TimerController", ["$scope", "$mdDialog", '$location', function($scope, $mdDialog, $location) {
  var tThis = this;
  tThis.trIndex = -1;


  tThis.tableObj = [{
      name: "My Timer1",
      user: "Cip1",
      style: "Style 1",
      fontcolor: "Blue",
      fontsize: "18px",
      endDate: "12.12.2018",
      endTime: "12:12:00",
      timezone: "+2:00 GMT"
    },
    {
      name: "My Timer2",
      user: "Cip2",
      style: "Style 1",
      fontcolor: "Blue",
      fontsize: "18px",
      endDate: "12.12.2018",
      endTime: "12:12:00",
      timezone: "+2:00 GMT"
    },
    {
      name: "My Timer3",
      user: "Cip3",
      style: "Style 1",
      fontcolor: "Blue",
      fontsize: "18px",
      endDate: "12.12.2018",
      endTime: "12:12:00",
      timezone: "+2:00 GMT"
    },
    {
      name: "My Timer4",
      user: "Cip4",
      style: "Style 1",
      fontcolor: "Blue",
      fontsize: "18px",
      endDate: "12.12.2018",
      endTime: "12:12:00",
      timezone: "+2:00 GMT"
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
    var objToDelete = tThis.tableObj[tThis.trIndex];
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

      tThis.tableObj.splice(objToDelete, 1);
      tThis.trIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this timer.';
    });
  };
  

}])
