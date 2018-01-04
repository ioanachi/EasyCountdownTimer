import {
  app
} from "../main.js"


app.controller("TimerController", ["$scope", function($scope) {
  var tThis = this;
  tThis.trIndex = -1;


  tThis.tableObj = [{
      name: "My Timer",
      user: "Cip",
      style: "Style 1",
      fontcolor: "Blue",
      fontsize: "18px",
      endDate: "12.12.2018",
      endTime: "12:12:00",
      timezone: "+2:00 GMT"
    },
    {
      name: "My Timer",
      user: "Cip",
      style: "Style 1",
      fontcolor: "Blue",
      fontsize: "18px",
      endDate: "12.12.2018",
      endTime: "12:12:00",
      timezone: "+2:00 GMT"
    },
    {
      name: "My Timer",
      user: "Cip",
      style: "Style 1",
      fontcolor: "Blue",
      fontsize: "18px",
      endDate: "12.12.2018",
      endTime: "12:12:00",
      timezone: "+2:00 GMT"
    },
    {
      name: "My Timer",
      user: "Cip",
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
  tThis.deletefct = function() {
    var objToDelete = tThis.tableObj[tThis.trIndex];
    console.log(objToDelete, "objToDelete");
    tThis.tableObj.splice(objToDelete, 1);
  }
}])
