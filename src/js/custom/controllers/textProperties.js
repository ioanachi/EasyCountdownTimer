import {
  app
} from "../main.js"


app.controller("TxtpropertiesController", ["$scope", "$mdDialog", '$location', function($scope, $mdDialog, $location) {
  var tThis = this;
  tThis.trIndex = -1;


  tThis.txtPropertiesObj = [{
      fontFamily: "Arial",
      fontSize: "22px",
      fontColor: "#FF0000",
      letterSpacing: "1px",
      wordSpacing: "3px",
    }, {
      fontFamily: "Times New Roman",
      fontSize: "24px",
      fontColor: "#245bb5",
      letterSpacing: "2px",
      wordSpacing: "0px",
    }, {
      fontFamily: "Arial",
      fontSize: "30px",
      fontColor: "#245bb5",
      letterSpacing: "1px",
      wordSpacing: "0px",
    }, {
      fontFamily: "Arial",
      fontSize: "1px",
      fontColor: "#245bb5",
      letterSpacing: "4px",
      wordSpacing: "0px",
    }

  ];
  tThis.clicked = function(index) {
    console.log(index);
    tThis.trIndex = index;
  };


  tThis.goToEdit = function() {
    $location.path('/textProperties/edit/' + tThis.trIndex)
  };

  $scope.showConfirm = function(ev) {
    var objToDelete = tThis.txtPropertiesObj[tThis.trIndex];
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

      tThis.txtPropertiesObj.splice(objToDelete, 1);
      tThis.trIndex = -1;
    }, function() {
      $scope.status = 'You decided to keep this timer.';
    });
  };


}])
