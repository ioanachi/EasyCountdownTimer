import {
  app
} from "../main.js"


app.controller("TimeraddController", ["$http", "$scope", '$location', function($http, $scope, $location) {
  var tThis = this;
  tThis.timeZone = [];
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
    tThis.zoneName.forEach(function(item){
      item.newValue = item.value +' '+item.name;
    })


  })


}])
