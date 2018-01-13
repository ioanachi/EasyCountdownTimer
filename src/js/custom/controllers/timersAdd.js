import {
  app
} from "../main.js"


app.controller("TimeraddController", ["$http", "$scope", '$location', function($http, $scope, $location) {
  var tThis = this;
  tThis.timeZone = [];
  $scope.myColor;
  tThis.zoneName = [];
  $http.get('./src/js/custom/controllers/timezones.txt').then(function(raspuns) {
    var text = raspuns.data;
    text = text.replace('<tr>', '');
    var textpartial = text.split('<tr>');
    textpartial.forEach(function(item1, index) {
      // console.log(item1);

      var timeZ = item1.split('</td>');
      var zone = timeZ[1].split('>');
      // console.log(zone);

      var timeZo = timeZ[2].split('>');
      var zoneNam = {
        name: zone[1],
        value: timeZo[1],
      };
      tThis.zoneName.push(zoneNam);
    });
    console.log(tThis.zoneName);
    tThis.zoneName.forEach(function(item) {
      item.newValue = item.value + ' ' + item.name;
    })
  });
  tThis.timeH = [];
  tThis.timeS = [];

  for (var i = 1; i < 25; i++) {
    if (i < 10) {
      tThis.timeH.push('0' + i);
    } else {
      tThis.timeH.push(i);
    };
  };
  console.log(tThis.timeH);


  for (var i = 1; i < 61; i++) {
    if (i < 10) {
      tThis.timeS.push('0' + i);
    } else {
      tThis.timeS.push(i);
    };
  };
  console.log(tThis.timeS);


}])
