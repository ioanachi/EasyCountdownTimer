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
    tThis.zoneName.forEach(function(item){
      item.newValue = item.value +' '+item.name;
    })
  });


  $scope.color = '#FF0000';

  // options - if a list is given then choose one of the items. The first item in the list will be the default
  $scope.options = {
      required: [false],
      disabled: [false],
      placeholder: '',
      inputClass: '',
      id: undefined,
      name: undefined,
      restrictToFormat: [false],
      preserveInputFormat: [true],
      allowEmpty: [false],
      format: ['hex', 'raw'],
      case: ['lower'],
      hue: [ false],
      saturation: [false],
      lightness: [true],
      alpha: [false],
      dynamicHue: [true],
      dynamicSaturation: [false],
      dynamicLightness: [true],
      dynamicAlpha: [false],
      // swatch
      swatch: [false],
      swatchPos: ['left', 'right'],
      swatchBootstrap: [true, false],
      swatchOnly: [true, false],
      // popup
      round: [false, true],
      pos: ['bottom left', 'bottom right', 'top left', 'top right'],
      inline: [false, true],
      horizontal: [false, true],
      // show/hide
      show: {
          swatch: [true, false],
          focus: [true, false],
      },
      hide: {
          blur: [true, false],
          escape: [true, false],
          click: [true, false],
      },
      // buttons
      close: {
          show: [false, true],
          label: 'Close',
          class: '',
      },
      clear: {
          show: [false, true],
          label: 'Clear',
          class: '',
      },
      reset: {
          show: [false, true],
          label: 'Reset',
          class: '',
      },
  };
  $scope.eventApi = {
      onChange:  function(api, color, $event) {},
      onBlur:    function(api, color, $event) {},
      onOpen:    function(api, color, $event) {},
      onClose:   function(api, color, $event) {},
      onClear:   function(api, color, $event) {},
      onReset:   function(api, color, $event) {},
      onDestroy: function(api, color) {},
  };
console.log($scope.api, "escswcewcwecwecwecwecwc");
  // exposed api functions
  // $scope.api.open();       // opens the popup
  // $scope.api.close();      // closes the popup
  // $scope.api.clear();      // removes value
  // $scope.api.reset();      // resets color value to original value
  // $scope.api.getElement(); // returns the wrapping <color-picker> element
  // $scope.api.getScope();   // returns the color picker $scope

  // api event handlers


  // decorator - all variables in options can be globally overridden here



}])
