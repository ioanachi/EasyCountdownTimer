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
  });




  
  $scope.color = '#FF0000';

  // options - if a list is given then choose one of the items. The first item in the list will be the default
  $scope.options = {
      // html attributes
      required: [false, true],
      disabled: [false, true],
      placeholder: '',
      inputClass: '',
      id: undefined,
      name: undefined,
      // validation
      restrictToFormat: [false, true],
      preserveInputFormat: [false, true],
      allowEmpty: [false, true],
      // color
      format: ['hsl', 'hsv', 'rgb', 'hex', 'hexString', 'hex8', 'hex8String', 'raw'],
      case: ['upper', 'lower'],
      // sliders
      hue: [true, false],
      saturation: [false, true],
      lightness: [false, true], // Note: In the square mode this is HSV and in round mode this is HSL
      alpha: [true, false],
      dynamicHue: [true, false],
      dynamicSaturation: [true, false],
      dynamicLightness: [true, false],
      dynamicAlpha: [true, false],
      // swatch
      swatch: [true, false],
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

  // exposed api functions
  $scope.api.open();       // opens the popup
  $scope.api.close();      // closes the popup
  $scope.api.clear();      // removes value
  $scope.api.reset();      // resets color value to original value
  $scope.api.getElement(); // returns the wrapping <color-picker> element
  $scope.api.getScope();   // returns the color picker $scope

  // api event handlers
  $scope.eventApi = {
      onChange:  function(api, color, $event) {},
      onBlur:    function(api, color, $event) {},
      onOpen:    function(api, color, $event) {},
      onClose:   function(api, color, $event) {},
      onClear:   function(api, color, $event) {},
      onReset:   function(api, color, $event) {},
      onDestroy: function(api, color) {},
  };

  // decorator - all variables in options can be globally overridden here
  angular
      .module('app', ['color.picker'])
      .config(function($provide) {
          $provide.decorator('ColorPickerOptions', function($delegate) {
              var options = angular.copy($delegate);
              options.round = true;
              options.alpha = false;
              options.format = 'hex';
              return options;
          });
      });

}])
